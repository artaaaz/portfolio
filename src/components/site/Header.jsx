import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PAPER, usePageTransition } from "../../lib/pageTransition";
import { profile, socials } from "../../data/content";
import { EASE } from "./Reveal";

const NAV = [
  // "/#..." supaya tetap jalan dari halaman /projects.
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "All projects", href: "/projects" },
  { label: "Reel", href: "/#reel" },
  { label: "Contact", href: "#contact" },
];

// Tombol bulat dengan ikon gelombang (ala lusion.co). Warnanya ikut warna tema:
// biru di halaman biasa, warna project di halaman project. Klik = jeda/jalankan.
function WaveButton() {
  const [playing, setPlaying] = useState(true);
  return (
    <button
      type="button"
      onClick={() => setPlaying((v) => !v)}
      aria-pressed={playing}
      aria-label={playing ? "Pause wave" : "Play wave"}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-theme text-on-theme transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 overflow-hidden" fill="none" aria-hidden>
        <g className={playing ? "wave-anim" : ""}>
          <path
            d={playing ? "M-2 12 Q1 5 4 12 T10 12 T16 12 T22 12 T28 12 T34 12" : "M-2 12 Q1 10 4 12 T10 12 T16 12 T22 12 T28 12 T34 12"}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ transition: "d 0.4s ease" }}
          />
        </g>
      </svg>
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { go } = usePageTransition();

  // Link menu & logo: pindah halaman lewat transisi (tanpa memuat ulang web).
  // "/#about" dari halaman lain -> buka beranda di section About. Kalau section
  // tujuan tidak ada di halaman ini (mis. #contact di halaman project), buka
  // beranda di section itu. Link ke section di halaman yang sama ditangani
  // smooth scroll biasa.
  const onNav = (e, href) => {
    setOpen(false);
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const [rawPath, hash] = href.split("#");
    const path = rawPath || pathname;
    const section = hash && hash !== "top" ? `#${hash}` : 0;
    if (path === pathname && (!section || document.querySelector(section))) return;
    e.preventDefault();
    const to = path === pathname ? "/" : path;
    go(to, { color: PAPER, scroll: section });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Logo: elemen fixed tersendiri dengan mix-blend-difference, supaya warnanya
          membalik otomatis (gelap di latar terang, putih di latar gelap). */}
      <a
        href="/#top"
        onClick={(e) => onNav(e, "/#top")}
        className="fixed left-4 top-4 z-50 flex h-11 items-center text-xl font-semibold tracking-tight text-white mix-blend-difference md:left-8 md:top-6 md:text-2xl"
        aria-label="Back to top"
      >
        {profile.short}
        <sup className="ml-0.5 text-[10px] font-medium">®</sup>
      </a>

      {/* Header selalu tampil (fixed) */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="flex items-center justify-end px-4 py-4 md:px-8 md:py-6">
          <div className="pointer-events-auto flex items-center gap-2">
            <WaveButton />
            <a href={`mailto:${profile.email}`} className="pill pill-dark hidden ring-1 ring-white/20 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
              Let's talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="pill pill-light"
            >
              {open ? "Close" : "Menu"}
              <span className="relative flex h-3 w-4 flex-col justify-between" aria-hidden>
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="site-menu"
              aria-label="Main menu"
              className="fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-sm rounded-3xl bg-white p-3 shadow-2xl md:right-8 md:top-24"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ul>
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => onNav(e, item.href)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-2xl font-medium tracking-tight transition-colors hover:bg-paper"
                    >
                      {item.label}
                      <span className="text-base opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-2 rounded-2xl bg-ink p-4 text-white">
                <p className="label text-white/50">Get in touch</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block text-lg font-medium hover:text-accent">
                  {profile.email}
                </a>
                <div className="mt-4 flex gap-4 text-sm text-white/70">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
