import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { profile } from "../../data/content";
import { EASE } from "./Reveal";
import { usePreloaderDone } from "./Preloader";

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const ready = usePreloaderDone();

  // Orb mengikuti mouse (pengganti scene 3D).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const sx2 = useTransform(sx, (v) => v * -0.6);
  const sy2 = useTransform(sy, (v) => v * -0.6);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 120);
      my.set((e.clientY / window.innerHeight - 0.5) * 120);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  // Saat discroll, kartu hero sedikit mengecil dan isinya memudar.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.92]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Designing", "& building", "digital", "experiences."];

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[600px] p-2 md:p-3">
      <motion.div
        style={{ scale }}
        className="grain relative h-full w-full overflow-hidden rounded-3xl bg-[#dfe3ef] md:rounded-4xl"
      >
        {/* Orb */}
        <motion.div style={{ x: sx, y: sy }} className="absolute inset-0" aria-hidden>
          <div className="orb orb-a left-[35%] top-[15%] h-[45vw] w-[45vw] max-h-[620px] max-w-[620px] bg-accent opacity-80" />
        </motion.div>
        <motion.div style={{ x: sx2, y: sy2 }} className="absolute inset-0" aria-hidden>
          <div className="orb orb-b left-[55%] top-[40%] h-[30vw] w-[30vw] max-h-[420px] max-w-[420px] bg-[#7fd1ff] opacity-70" />
          <div className="orb orb-a left-[20%] top-[50%] h-[22vw] w-[22vw] max-h-[300px] max-w-[300px] bg-white opacity-90" />
        </motion.div>

        <motion.div style={{ opacity: fade }} className="relative z-10 flex h-full flex-col justify-between px-5 pb-6 pt-24 md:px-10 md:pb-10 md:pt-28">
          <div className="flex items-start justify-between">
            <p className="label text-ink/60">
              Portfolio
              <br />
              {profile.name} — {new Date().getFullYear()}
            </p>
            <p className="label hidden text-right text-ink/60 md:block">
              Based in
              <br />
              {profile.location}
            </p>
          </div>

          <h1 className="max-w-[14ch] text-[13.5vw] font-semibold leading-[0.88] tracking-[-0.045em] md:text-[9.5vw] lg:text-[8.6vw]">
            {words.map((w, i) => (
              <span key={w} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  // Mulai saat preloader membuka halaman.
                  animate={{ y: ready ? "0%" : "110%" }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.09, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="flex items-end justify-between gap-6">
            <ul className="flex flex-col gap-1 text-sm font-medium md:text-base">
              {profile.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <a href="#about" className="group flex items-center gap-3 text-sm font-medium">
              <span className="hidden sm:inline">Scroll to explore</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-accent">
                <motion.span
                  animate={reduce ? undefined : { y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  ↓
                </motion.span>
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
