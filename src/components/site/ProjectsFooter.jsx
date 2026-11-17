import React, { Suspense, lazy, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { profile, socials } from "../../data/content";
import { LineReveal, Reveal } from "./Reveal";
import { scrollToTarget } from "../../lib/smoothScroll";
import NextPagePanel from "./NextPagePanel";

// Ballpit (React Bits, WebGL) hanya dimuat saat halaman Projects dibuka.
const Ballpit = lazy(() => import("../Ballpit"));

// Warna bola: dominan abu-abu & hitam dengan aksen warna terang (ala lusion.co).
const BALL_COLORS = [
  "#c9d1db",
  "#c9d1db",
  "#aab4c1",
  "#aab4c1",
  "#8e99a8",
  "#16171c",
  "#16171c",
  "#2147ff",
  "#37f26b",
  "#d6ff2b",
  "#b44dff",
  "#ff3b3b",
];


function Plus({ className = "" }) {
  return (
    <span className={`text-3xl font-light leading-none ${className}`} aria-hidden>
      +
    </span>
  );
}

// Bagian akhir halaman /projects (ala lusion.co):
// 1. "Let's work together!" + bola-bola (menempel di layar)
// 2. Footer putih yang naik menutupi bagian bola
// 3. Panel gelap "Keep scrolling" — terus scroll sampai garis penuh = pindah ke Home
export default function ProjectsFooter() {
  const ctaRef = useRef(null);
  const infoRef = useRef(null);
  const reduce = useReducedMotion();
  // Bola baru mulai dijatuhkan saat section terlihat.
  const inView = useInView(ctaRef, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <footer id="contact">
      <div className="relative">
        {/* 1. CTA + bola-bola: menempel, lalu ditutup footer putih */}
        <section ref={ctaRef} className="sticky top-0 h-[100svh] min-h-[640px] overflow-hidden">
          <div className="absolute inset-0">
            {inView && (
              <Suspense fallback={null}>
                <Ballpit
                  count={reduce ? 60 : 150}
                  colors={BALL_COLORS}
                  material="matte"
                  minSize={0.45}
                  maxSize={1.05}
                  gravity={0.6}
                  friction={0.996}
                  wallBounce={0.9}
                  followCursor
                  cursorSize={1.2}
                  lightIntensity={1.1}
                  shadows={0.5}
                />
              </Suspense>
            )}
          </div>

          <Plus className="absolute left-[20%] top-28 md:top-32" />
          <Plus className="absolute right-[20%] top-28 md:top-32" />
          <Plus className="absolute left-[20%] top-[62%]" />
          <Plus className="absolute left-1/2 top-[62%] -translate-x-1/2" />
          <Plus className="absolute right-[20%] top-[62%]" />

          <div className="pointer-events-none relative z-10 flex h-full flex-col items-center px-4 pt-28 text-center md:pt-32">
            <Reveal>
              <p className="text-sm uppercase md:text-base">Is your big idea ready to go wild?</p>
            </Reveal>
            <LineReveal
              lines={["Let's work", "together!"]}
              className="mt-[8vh] text-[15vw] font-normal leading-[0.95] tracking-[-0.03em] md:text-[9.5vw]"
            />
            <button
              type="button"
              onClick={() => scrollToTarget(infoRef.current)}
              className="pointer-events-auto absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6 whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm uppercase shadow-xl transition-colors duration-300 hover:bg-ink hover:text-white md:bottom-12 md:gap-8 md:px-10 md:py-5 md:text-base"
            >
              <span aria-hidden>↓</span>
              Continue to scroll
              <span aria-hidden>↓</span>
            </button>
          </div>
        </section>

        {/* Jeda: bagian "Let's work together!" tetap menempel selama satu layar
            scroll dulu, baru footer putih naik. */}
        <div aria-hidden className="h-[100svh]" />

        {/* 2. Footer putih yang naik dari bawah */}
        <section ref={infoRef} className="relative z-10 bg-white px-4 pb-10 pt-16 md:px-16 md:pb-12 md:pt-20">
          <div className="grid gap-12 text-lg md:grid-cols-12 md:gap-8 md:text-xl">
            <div className="md:col-span-3">
              <p>{profile.location}</p>
              <p>Indonesia</p>
              <a href={profile.phoneHref} className="mt-6 block transition-colors hover:text-accent">
                {profile.phone}
              </a>
            </div>
            <div className="space-y-10 md:col-span-3">
              <ul className="space-y-1">
                {socials
                  .filter((s) => s.label !== "Email")
                  .map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                        {s.label}
                      </a>
                    </li>
                  ))}
              </ul>
              <div>
                <p>Get in touch</p>
                <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-accent">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="text-[11vw] font-normal leading-[1.02] tracking-[-0.03em] md:text-[4.4vw]">
                Have a project
                <br />
                in mind?
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 flex h-16 w-full max-w-xl items-center justify-between rounded-2xl bg-paper px-6 text-ink/50 transition-colors hover:bg-ink hover:text-white md:h-20 md:px-8"
              >
                <span>Send me an email</span>
                <span className="text-2xl text-ink transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 text-sm md:mt-20 md:text-base">
            <p>©{new Date().getFullYear()} {profile.name}</p>
            <p>Built with React, Tailwind & Framer Motion</p>
            <button
              type="button"
              onClick={() => scrollToTarget(0)}
              aria-label="Back to top"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-2xl text-white transition-colors hover:bg-accent md:h-20 md:w-20"
            >
              ↑
            </button>
          </div>
        </section>
      </div>

      {/* 3. Panel gelap: lanjut ke Home */}
      <NextPagePanel to="/" title="Home" />
    </footer>
  );
}
