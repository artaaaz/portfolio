import React, { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  useVelocity,
} from "framer-motion";
import { projects } from "../../data/content";
import NotFound from "../NotFound";
import Header from "./Header";
import { Placeholder } from "./ProjectGrid";
import { EASE } from "./Reveal";
import { scrollToTarget } from "../../lib/smoothScroll";
import { themeVars } from "../../lib/color";
import { useOverscroll } from "../../lib/useOverscroll";
import { PAPER, usePageTransition } from "../../lib/pageTransition";

// Latar Dither (React Bits, WebGL) — dimuat hanya di halaman project.
const Dither = lazy(() => import("../Dither"));

const pad = (n) => String(n).padStart(2, "0");
const list = (v) => (Array.isArray(v) ? v : v ? String(v).split(/\s*,\s*/) : []);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

function useIsDesktop() {
  const query = "(min-width: 768px)";
  const [ok, setOk] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setOk(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return ok;
}

// Judul: tiap kata naik dari bawah.
function RollTitle({ text, className, still = false }) {
  const reduce = useReducedMotion() || still;
  return (
    <h1 aria-label={text} className={className} data-hero-title>
      {text.split(" ").map((word, i) => (
        <span key={i} className="-mb-[0.08em] mr-[0.22em] inline-block overflow-hidden pb-[0.08em] last:mr-0" aria-hidden>
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.35 + i * 0.08, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

// Kartu di jalur horizontal: tinggi tetap di desktop, penuh lebar di HP.
const CARD = "relative shrink-0 overflow-hidden rounded-2xl md:h-full";

// Panel terang di ujung jalur (ala lusion.co): judul project berikutnya besar
// dan samar. Scroll terus = garis "Next project" terisi lalu pindah. Ada juga
// tombol kembali ke project sebelumnya.
function EndPanel({ prev, next, origin }) {
  const { goMorph } = usePageTransition();
  const fired = useRef(false);
  const panelRef = useRef(null);
  const titleRef = useRef(null);
  const prevTitleRef = useRef(null);
  // Next & Prev sama-sama bergeser: panel terang melebar menutup layar dan
  // judul project tujuan pindah ke posisi judul di halaman baru.
  const go = (p) => {
    if (fired.current) return false;
    fired.current = true;
    const title = p === next ? titleRef.current : prevTitleRef.current;
    const ok = goMorph(`/projects/${p.id}`, { panel: panelRef.current, title, state: origin });
    if (!ok) fired.current = false; // transisi lain masih berjalan: boleh dicoba lagi
    return ok;
  };
  const fill = useOverscroll(() => go(next));
  const titleX = useTransform(fill, (v) => `${-clamp01(v) * 3}vw`);

  return (
    <div
      ref={panelRef}
      className="relative flex h-[70svh] w-full shrink-0 flex-col justify-between overflow-hidden bg-paper px-4 pb-24 pt-24 text-ink md:h-full md:w-[28vw] md:px-10 md:pb-12 md:pt-32">
      <p className="text-sm uppercase text-ink/50 md:text-base">Next project</p>

      {/* Judul besar & samar, sengaja terpotong di tepi kanan (ala lusion) */}
      <motion.button
        ref={titleRef}
        type="button"
        onClick={() => go(next)}
        style={{ x: titleX }}
        className="text-left text-[13vw] font-normal leading-[0.95] tracking-[-0.04em] text-ink/20 transition-colors duration-500 hover:text-ink md:whitespace-nowrap md:text-[5.2vw]"
      >
        {next.title}
      </motion.button>

      <div className="flex flex-col gap-6">
        <button
          type="button"
          onClick={() => go(prev)}
          className="group flex items-center gap-3 self-start text-left text-xs uppercase text-ink/60 transition-colors hover:text-ink md:text-sm"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1" aria-hidden>
            ←
          </span>
          <span>
            Prev project
            <span ref={prevTitleRef} className="block normal-case text-ink/40">
              {prev.title}
            </span>
          </span>
        </button>

        <button type="button" onClick={() => go(next)} className="group flex items-center gap-4 self-start text-sm uppercase md:text-base">
          Next project
          <span className="relative h-[3px] w-28 overflow-hidden rounded-full bg-ink/15 md:w-[7vw]">
            <motion.span style={{ scaleX: fill }} className="absolute inset-0 origin-left rounded-full bg-theme" />
          </span>
          <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </button>
      </div>
    </div>
  );
}

// Halaman detail project ala lusion.co: latar gelap, info project di kiri dan
// kartu-kartu gambar/cerita berderet ke kanan. Scroll ke bawah = konten
// bergeser ke samping. Di HP tampil biasa (ke bawah).
export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const desktop = useIsDesktop();
  const { go: transition, cameViaMorph } = usePageTransition();
  // Asal halaman: dibuka dari beranda -> Back ke beranda; dari All projects ->
  // Back ke All projects (default kalau halaman dibuka langsung).
  const origin = useLocation().state;
  const backTo = origin?.from === "/" ? "/" : "/projects";
  const backScroll = origin?.fromScroll ?? 0;
  // Datang dari "Next project": judul sudah dibawa transisi, jadi tanpa animasi masuk.
  const [viaMorph] = useState(() => cameViaMorph());

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const blurRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!project) return;
    scrollToTarget(0, { immediate: true });
    document.title = `${project.title} — Erlangga Artha`;
    return () => {
      document.title = "Erlangga Artha — Frontend Developer & UI/UX Designer";
    };
  }, [project]);

  // Panjang geser = lebar jalur - lebar layar (diukur ulang saat ukuran berubah).
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !desktop) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [desktop, project]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => (desktop ? -clamp01(v) * distance : 0));
  const infoOpacity = useTransform(scrollYProgress, (v) => (desktop ? 1 - clamp01(v / 0.18) * 0.7 : 1));
  const hintOpacity = useTransform(scrollYProgress, (v) => 1 - clamp01(v / 0.05));
  const barOpacity = useTransform(scrollYProgress, (v) => 1 - clamp01((v - 0.85) / 0.1));

  // Blur menyamping saat konten bergeser: makin cepat geser, makin blur.
  const vx = useVelocity(x);
  useMotionValueEvent(vx, "change", (v) => {
    const el = trackRef.current;
    const blur = blurRef.current;
    if (!el || !blur) return;
    const amount = Math.min(Math.abs(v) / 260, 9);
    blur.setAttribute("stdDeviation", `${amount.toFixed(2)} 0`);
    el.style.filter = amount > 0.25 ? "url(#slide-blur)" : "none";
  });

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const tools = list(project.tools);
  const story = [
    ["Overview", project.overview],
    ["Challenge", project.challenge],
    ["Process", project.process],
    ["Solution", project.solution],
    ["Result", project.result],
  ].filter(([, text]) => text);

  return (
    <MotionConfig reducedMotion="user">
      {/* Warna project hanya untuk elemen berlatar warna (tombol gelombang, badge,
          kartu Deliverables, garis progres); latar halaman tetap hitam. */}
      <div className="relative bg-ink text-white" style={themeVars(project.color)}>
        {/* Latar Dither (React Bits) di belakang semua slide */}
        <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
          <Suspense fallback={null}>
            <Dither
              waveColor={[0.42, 0.42, 0.46]}
              backgroundColor={[0, 0, 0]}
              colorNum={4}
              pixelSize={2}
              waveSpeed={0.04}
              waveFrequency={3}
              waveAmplitude={0.3}
              mouseRadius={0.6}
              clickRipple={false}
            />
          </Suspense>
        </div>
        <Header />
        <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
          <filter id="slide-blur" x="-10%" y="0" width="120%" height="100%">
            <feGaussianBlur ref={blurRef} stdDeviation="0 0" />
          </filter>
        </svg>

        {/* Tombol Back di tengah atas (ala lusion) */}
        <Link
          to={backTo}
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            transition(backTo, { color: PAPER, scroll: backScroll });
          }}
          className="fixed bottom-4 left-1/2 z-50 flex h-11 -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium uppercase text-ink shadow-xl transition-colors hover:bg-theme hover:text-on-theme md:bottom-auto md:top-6"
        >
          <span aria-hidden>←</span> Back
        </Link>

        <main className="relative">
          <section
            ref={sectionRef}
            style={desktop ? { height: `calc(100svh + ${distance}px)` } : undefined}
            className="relative"
          >
            <div className="md:sticky md:top-0 md:h-[100svh] md:overflow-hidden">
              <motion.div ref={trackRef} style={{ x }} className="flex flex-col md:h-full md:w-max md:flex-row">
                {/* Masuk dari kanan saat halaman dibuka */}
                <motion.div
                  initial={viaMorph ? false : { x: "18vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
                  className="flex flex-col gap-4 px-4 pb-16 pt-24 md:h-full md:w-max md:flex-row md:items-stretch md:gap-6 md:px-16 md:pb-[13svh] md:pt-[16svh]"
                >
                  {/* INFO */}
                  <motion.div
                    style={{ opacity: infoOpacity }}
                    className="flex shrink-0 flex-col justify-center pb-8 md:w-[44vw] md:pb-0 md:pr-12"
                  >
                    {(project.kicker || project.badge) && (
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        {project.kicker && <span className="text-sm uppercase text-white/50">{project.kicker}</span>}
                        {project.badge && (
                          <span className="label rounded-full bg-theme px-3 py-1.5 text-on-theme">{project.badge}</span>
                        )}
                      </div>
                    )}
                    <RollTitle
                      still={viaMorph}
                      text={project.title}
                      className={`font-normal leading-[0.95] tracking-[-0.03em] ${
                        project.title.length > 18 ? "text-5xl md:text-[3.6vw]" : "text-6xl md:text-[5vw]"
                      }`}
                    />

                    <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1.5fr_1fr] md:gap-10">
                      <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-[15px]">
                        {project.description && <p>{project.description}</p>}
                        {project.overview && project.overview !== project.description && <p>{project.overview}</p>}
                      </div>
                      <div className="space-y-6 text-sm md:text-[15px]">
                        <div>
                          <p className="uppercase text-white/50">{project.toolsLabel || "Services"}</p>
                          <ul className="mt-2 space-y-0.5">
                            {(tools.length ? tools : project.tags).map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase text-white/50">Year</p>
                          <p className="mt-2">{project.date || project.year}</p>
                        </div>
                        {project.category && (
                          <div>
                            <p className="uppercase text-white/50">Category</p>
                            <p className="mt-2">{project.category}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex h-14 items-center gap-3 self-start rounded-full bg-white px-7 text-sm font-medium uppercase text-ink transition-colors hover:bg-theme hover:text-on-theme"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                        {project.linkLabel || "View on GitHub"}
                      </a>
                    )}
                  </motion.div>

                  {/* GAMBAR UTAMA */}
                  <div className={`${CARD} aspect-[4/3] bg-[#121317] md:aspect-[16/10]`}>
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover object-top" />
                    ) : (
                      <Placeholder title={project.title} className="text-5xl md:text-[5vw]" />
                    )}
                  </div>

                  {/* CERITA: satu kartu per bagian */}
                  {story
                    .filter(([label]) => label !== "Overview")
                    .map(([label, text], i) => (
                      <article
                        key={label}
                        className={`${CARD} flex flex-col justify-between gap-10 border border-white/10 bg-[#121317] p-6 md:w-[30vw] md:p-10`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="label text-white/40">{pad(i + 1)}</span>
                          <h2 className="text-4xl tracking-[-0.03em] md:text-[3.2vw]">{label}</h2>
                        </div>
                        <p className="text-base leading-relaxed text-white/75 md:text-lg">{text}</p>
                      </article>
                    ))}

                  {/* DELIVERABLES */}
                  {project.deliverables?.length > 0 && (
                    <article className={`${CARD} flex flex-col justify-between gap-10 bg-theme p-6 text-on-theme md:w-[28vw] md:p-10`}>
                      <h2 className="text-4xl tracking-[-0.03em] md:text-[3.2vw]">Deliverables</h2>
                      <ul className="flex flex-wrap gap-2">
                        {project.deliverables.map((d) => (
                          <li key={d} className="rounded-full border border-current px-4 py-2 text-sm md:text-base">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </article>
                  )}

                  {/* GALERI */}
                  {(project.gallery || []).map((src, i) => (
                    <div key={src} className={`${CARD} aspect-[3/4] bg-[#121317]`}>
                      <img
                        src={src}
                        alt={`${project.title} ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Ujung jalur: project berikutnya / sebelumnya */}
                <EndPanel prev={prev} next={next} origin={origin} />
              </motion.div>

              {/* Petunjuk scroll (desktop) */}
              <motion.p
                style={{ opacity: hintOpacity }}
                className="pointer-events-none absolute bottom-8 right-16 hidden text-sm uppercase text-white/60 md:block"
              >
                Scroll to explore <span aria-hidden>»</span>
              </motion.p>
              {/* Garis progres geser */}
              <motion.div
                style={{ opacity: barOpacity }}
                className="absolute bottom-0 left-0 hidden h-[2px] w-full bg-white/10 md:block"
                aria-hidden
              >
                <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-theme" />
              </motion.div>
            </div>
          </section>
        </main>

      </div>
    </MotionConfig>
  );
}
