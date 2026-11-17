import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { showreel, videos } from "../../data/content";
import { VideoModal, getYouTubeId } from "../ui/hero-video-dialog";
import { EASE, LineReveal, Reveal } from "./Reveal";
import { scrollToTarget } from "../../lib/smoothScroll";
import gsap from "gsap";

// Panjang scroll (dalam vh) saat section ini "di-pin":
// - GROW_VH: video kecil di samping teks bergeser ke tengah & membesar jadi layar penuh
// - SEG_VH: tiap video (video berganti saat discroll)
const GROW_VH = 110;
const SEG_VH = 70;
const PIN_VH = 100 + GROW_VH + videos.length * SEG_VH;
// Bagian dari progress scroll (0-1) yang dipakai untuk membesarkan video.
const GROW_END = GROW_VH / (GROW_VH + videos.length * SEG_VH);
const pad = (n) => String(n).padStart(2, "0");
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function useIsMobile() {
  const query = "(max-width: 767px)";
  const [mobile, setMobile] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMobile(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

// Teks cerita Visual Stories (dipakai di samping video di desktop, di atas video di HP).
function StoryText({ count }) {
  return (
    <>
      {showreel.story.map((p) => (
        <p key={p.slice(0, 20)} className="leading-relaxed">
          {p}
        </p>
      ))}
      <p className="label text-muted">({pad(count)} videos — scroll to play through)</p>
    </>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Kata yang tiap hurufnya bisa "berguling": 2 salinan huruf bertumpuk di dalam
// jendela setinggi satu baris; GSAP menggeser tumpukan ke atas (yPercent -50).
function RollWord({ word, offset, refs }) {
  return word.split("").map((ch, i) => (
    <span key={i} className="inline-block h-[1.1em] overflow-hidden align-top leading-[1.1em]">
      <span
        ref={(el) => {
          refs.current[offset + i] = el;
        }}
        className="block will-change-transform"
      >
        <span className="block">{ch}</span>
        <span className="block">{ch}</span>
      </span>
    </span>
  ));
}

function PlayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 4.5v15l12.5-7.5z" />
    </svg>
  );
}

// Baris di atas/bawah bingkai: tanda "+" saat diam, berubah jadi teks
// "▶▶▶ PLAY REEL" yang berjalan saat cursor di atas reel.
function EdgeRow({ hover, reverse = false }) {
  const items = Array.from({ length: 8 });
  return (
    <div className="relative h-7 w-full overflow-hidden md:h-8" aria-hidden>
      <div
        className={`absolute inset-0 flex items-center justify-between px-1 text-2xl font-light leading-none text-ink transition-all duration-500 ease-out ${
          hover ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>+</span>
        ))}
      </div>
      <div
        className={`marquee absolute inset-0 flex items-center transition-all duration-500 ease-out ${
          hover ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`} style={{ "--duration": "18s" }}>
          {[...items, ...items].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap pr-[7vw] text-sm font-medium uppercase tracking-wide text-ink md:text-lg"
            >
              <span className="flex gap-0.5 text-accent">
                <PlayIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <PlayIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <PlayIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </span>
              Play Reel
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Tombol pilihan video + garis progres yang ikut scroll.
function Chip({ index, video, active, progress, onSelect }) {
  const seg = (1 - GROW_END) / videos.length;
  const fill = useTransform(progress, (v) => clamp01((v - GROW_END - seg * index) / seg));
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-pressed={active}
      className={`label pointer-events-auto relative overflow-hidden rounded-full px-3 py-2 transition-colors duration-300 md:px-4 ${
        active ? "bg-white text-ink" : "bg-white/15 text-white backdrop-blur hover:bg-white/30"
      }`}
    >
      {pad(index + 1)}
      <span className="hidden sm:inline"> {video.short}</span>
      <motion.span style={{ scaleX: fill }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent" aria-hidden />
    </button>
  );
}

export default function Reel() {
  const pinRef = useRef(null);
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const count = videos.length;
  const seg = (1 - GROW_END) / count;

  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [bgReady, setBgReady] = useState(false);
  const near = useInView(pinRef, { margin: "300px 0px" });

  // Progress 0 saat section mulai di-pin (atasnya menyentuh atas layar).
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor((v - GROW_END) / seg))));
  });

  // Nilai yang dibaca transform disimpan di ref supaya selalu yang terbaru.
  const cfg = useRef({});
  cfg.current = {
    startScale: reduce ? 1 : mobile ? 0.72 : 0.5,
    // Jarak geser PLAY/REEL (vw): mulai berjauhan, lalu merapat ke tombol.
    spread: reduce ? [0, 0] : mobile ? [-6, 0] : [-16, 0],
    reduce,
    mobile,
  };
  // 0 → 1 selama bingkai membesar. Bentuk fungsi sengaja dipakai: framer-motion
  // memindahkan opacity berbentuk array ke ScrollTimeline yang mengabaikan offset.
  const grow = useTransform(scrollYProgress, (v) => (cfg.current.reduce ? 1 : clamp01((v - 0.03) / (GROW_END - 0.03))));
  const eased = useTransform(grow, easeInOut);
  const scale = useTransform(eased, (g) => cfg.current.startScale + (1 - cfg.current.startScale) * g);
  const radius = useTransform(scale, (s) => `${20 / s}px`);
  // Desktop: video mulai di sisi kiri (samping teks), lalu bergeser ke tengah.
  const frameX = useTransform(eased, (g) => {
    if (cfg.current.mobile || cfg.current.reduce) return 0;
    const vw = window.innerWidth;
    const frameW = vw - 24; // lebar bingkai penuh (px-3 kiri-kanan)
    const startCenter = 32 + (cfg.current.startScale * frameW) / 2; // rata kiri dengan konten (px-8)
    return (startCenter - vw / 2) * (1 - g);
  });
  // Teks cerita di kanan memudar ke atas saat video mulai membesar.
  const textOpacity = useTransform(grow, (g) => 1 - clamp01(g / 0.35));
  const textY = useTransform(grow, (g) => -40 * clamp01(g / 0.35));
  // PLAY [tombol] REEL muncul setelah video cukup besar; ikon play kecil sebaliknya.
  const wordsOpacity = useTransform(grow, (g) => (cfg.current.reduce ? 1 : clamp01((g - 0.5) / 0.3)));
  const smallPlayOpacity = useTransform(wordsOpacity, (o) => 1 - o);
  const playX = useTransform(grow, (g) => {
    const [a, b] = cfg.current.spread;
    return `${a + (b - a) * g}vw`;
  });
  const reelX = useTransform(grow, (g) => {
    const [a, b] = cfg.current.spread;
    return `${-(a + (b - a) * g)}vw`;
  });
  const edgeOpacity = useTransform(grow, (g) => clamp01((g - 0.75) / 0.25));

  const video = videos[active];
  const ytId = getYouTubeId(video.videoSrc);
  const showBg = Boolean(near && !reduce && ytId);
  // Preview video baru tampil setelah iframe-nya siap. Timer dibatalkan dan status
  // di-reset saat video berganti atau iframe dilepas (keluar dari area Reel).
  const readyTimer = useRef(null);
  useEffect(() => {
    setBgReady(false);
    clearTimeout(readyTimer.current);
  }, [active, showBg]);
  useEffect(() => () => clearTimeout(readyTimer.current), []);

  // Klik tombol 01/02: scroll ke bagian video tersebut.
  const goTo = useCallback(
    (i) => {
      const el = pinRef.current;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const p = GROW_END + seg * (i + 0.5);
      scrollToTarget(top + p * (el.offsetHeight - window.innerHeight), { immediate: reduce });
    },
    [seg, reduce]
  );

  const openVideo = () => {
    setModalIndex(active);
    setModalOpen(true);
  };
  const closeModal = useCallback(() => setModalOpen(false), []);
  // Jeda kecil saat keluar, supaya pindah dari bingkai ke tombol tidak berkedip.
  const leaveTimer = useRef(null);
  const on = () => {
    clearTimeout(leaveTimer.current);
    setHover(true);
  };
  const off = () => {
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHover(false), 80);
  };
  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  // --- Animasi huruf PLAY REEL (GSAP) ---
  // Tiap huruf punya 2 salinan bertumpuk; salinan bawah naik menggantikan yang atas.
  // Huruf berganti berpasangan dengan urutan acak (mis. P+R, lalu L+E, A+E, Y+L).
  const letterRefs = useRef([]);
  const rollTl = useRef(null);
  const roll = useCallback(() => {
    if (reduce) return;
    const els = letterRefs.current.filter(Boolean);
    if (!els.length || rollTl.current?.isActive()) return;
    const order = shuffle(els.map((_, i) => i));
    const tl = gsap.timeline({ onComplete: () => gsap.set(els, { yPercent: 0 }) });
    // Total pergantian = 1 detik: 4 pasangan x jeda 0.12s + 0.06s + durasi 0.58s.
    for (let k = 0; k < order.length; k += 2) {
      const pair = order.slice(k, k + 2).map((i) => els[i]);
      tl.to(pair, { yPercent: -50, duration: 0.58, ease: "expo.inOut", stagger: 0.06 }, (k / 2) * 0.12);
    }
    rollTl.current = tl;
  }, [reduce]);
  useEffect(() => () => rollTl.current?.kill(), []);

  // Berganti saat discroll: 3x selama bingkai membesar, dan setiap video berganti.
  const rollStage = useRef(0);
  useMotionValueEvent(grow, "change", (g) => {
    const s = g >= 0.99 ? 3 : g > 0.66 ? 2 : g > 0.33 ? 1 : 0;
    if (s !== rollStage.current) {
      rollStage.current = s;
      if (s > 0) roll();
    }
  });
  const firstActive = useRef(true);
  useEffect(() => {
    if (firstActive.current) {
      firstActive.current = false;
      return;
    }
    roll();
  }, [active, roll]);

  const onEnter = () => {
    on();
    roll(); // juga berganti saat cursor masuk ke reel
  };
  const hoverProps = { onPointerEnter: onEnter, onPointerLeave: off, onFocus: on, onBlur: off };

  return (
    <section id="reel" aria-label="Visual stories">
      {/* Judul (garis meliuk dari PageLine lewat di belakangnya).
          Di HP teks cerita tampil di sini; di desktop teksnya ada di samping video. */}
      <div className="relative">
        <div className="relative mx-auto flex max-w-[1600px] flex-col gap-12 px-4 pb-10 pt-20 md:px-8 md:pb-4 md:pt-32">
          <LineReveal
            lines={["Visual", "Stories"]}
            className="text-[16vw] font-semibold leading-[0.88] tracking-[-0.045em] md:text-[9vw]"
          />
          <Reveal delay={0.15} className="max-w-xl space-y-4 text-base text-ink/80 md:hidden">
            <StoryText count={count} />
          </Reveal>
        </div>
      </div>

      <div ref={pinRef} className="relative" style={{ height: `${PIN_VH}vh` }}>
        {/* pt: beri ruang untuk header yang selalu tampil */}
        <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center gap-3 overflow-hidden px-2 pt-16 md:gap-4 md:px-3 md:pt-20">
          <motion.div style={{ opacity: edgeOpacity }} className="w-full">
            <EdgeRow hover={hover} />
          </motion.div>

          {/* Desktop: teks cerita di kanan, di samping video kecil. Memudar saat video membesar. */}
          <div className="pointer-events-none absolute inset-y-0 right-8 z-[4] hidden w-[38vw] max-w-xl items-center pt-20 md:flex">
            <motion.div style={{ opacity: textOpacity, y: textY }} className="space-y-4 text-xl leading-relaxed text-ink/80">
              <StoryText count={count} />
            </motion.div>
          </div>

          <motion.div
            {...hoverProps}
            style={{ x: frameX, scale, borderRadius: radius }}
            className="group relative h-[min(50vw,70svh)] w-full shrink-0 overflow-hidden bg-ink will-change-transform max-md:h-[66svh]"
          >
            {/* Thumbnail semua video, saling crossfade */}
            {videos.map((v, i) => (
              <img
                key={v.id}
                src={v.thumbnail}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Preview tanpa suara dari video yang aktif */}
            {showBg && (
              <iframe
                key={video.id}
                title={`${video.title} (preview tanpa suara)`}
                src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3`}
                allow="autoplay; encrypted-media; picture-in-picture"
                tabIndex={-1}
                aria-hidden
                onLoad={() => {
                  clearTimeout(readyTimer.current);
                  readyTimer.current = setTimeout(() => setBgReady(true), 1500);
                }}
                className={`pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.35] border-0 transition-opacity duration-1000 max-md:aspect-video max-md:w-auto max-md:max-w-none max-md:scale-[1.15] ${
                  bgReady ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-ink/10" />

            {/* Seluruh bingkai = tombol putar video aktif */}
            <button
              type="button"
              onClick={openVideo}
              aria-label={`Play video: ${video.title}`}
              className="absolute inset-0 z-[1]"
            />

            {/* Ikon play saat video masih kecil (sebelum PLAY REEL muncul) */}
            <motion.span
              style={{ opacity: smallPlayOpacity }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
              aria-hidden
            >
              <PlayIcon className="ml-1 h-9 w-9" />
            </motion.span>

            {/* Info video + pilihan video */}
            <motion.div
              style={{ opacity: edgeOpacity }}
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex flex-col gap-4 p-5 text-white md:flex-row md:items-end md:justify-between md:p-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={video.id}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="label text-white/70">
                    {pad(active + 1)} / {pad(count)} — {video.series}
                  </p>
                  <p className="mt-2 text-xl font-medium tracking-tight md:text-3xl">{video.title}</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2">
                {videos.map((v, i) => (
                  <Chip key={v.id} index={i} video={v} active={i === active} progress={scrollYProgress} onSelect={goTo} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity: edgeOpacity }} className="w-full">
            <EdgeRow hover={hover} reverse />
          </motion.div>

          {/* PLAY [tombol] REEL */}
          <motion.div
            style={{ opacity: wordsOpacity }}
            className="pointer-events-none absolute inset-x-0 top-[calc(50%+2rem)] z-[3] flex -translate-y-1/2 items-center justify-center gap-[2.5vw] text-[13vw] font-light leading-none tracking-[-0.02em] text-white md:top-[calc(50%+2.5rem)] md:text-[8.5vw]"
          >
            <motion.span style={{ x: playX }} className="flex" aria-hidden>
              <RollWord word="PLAY" offset={0} refs={letterRefs} />
            </motion.span>
            <button
              type="button"
              onClick={openVideo}
              {...hoverProps}
              aria-label={`Play video: ${video.title}`}
              className={`pointer-events-auto flex h-[clamp(56px,6vw,116px)] w-[clamp(88px,9.5vw,184px)] items-center justify-center rounded-full shadow-lg transition-colors duration-300 ${
                hover ? "bg-accent text-white" : "bg-white text-ink"
              }`}
            >
              <PlayIcon className={`h-[32%] w-[32%] transition-transform duration-300 ${hover ? "scale-110" : ""}`} />
            </button>
            <motion.span style={{ x: reelX }} className="flex" aria-hidden>
              <RollWord word="REEL" offset={4} refs={letterRefs} />
            </motion.span>
          </motion.div>
        </div>
      </div>

      <VideoModal
        videoSrc={videos[modalIndex].videoSrc}
        open={modalOpen}
        onClose={closeModal}
        title={videos[modalIndex].title}
      />
    </section>
  );
}
