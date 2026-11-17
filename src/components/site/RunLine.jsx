import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

// Garis pembatas yang "berjalan" mengikuti scroll: makin jauh discroll, makin
// panjang garisnya (dan mundur lagi saat scroll ke atas). Ujungnya bercahaya biru.
// - tone: "dark" untuk latar terang, "light" untuk latar gelap/biru.
// - end: posisi garis di layar (dari atas) saat sudah tergambar penuh.
//   Pakai nilai lebih besar (mis. "85%") untuk garis yang dekat dasar halaman.
export default function RunLine({ tone = "dark", end = "55%", className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", `start ${end}`] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  // Semua transform berbentuk fungsi agar framer-motion tidak memindahkannya ke
  // ScrollTimeline bawaan browser (yang mengabaikan offset di atas).
  const scaleX = useTransform(p, (v) => (reduce ? 1 : v));
  const headX = useTransform(p, (v) => `${(reduce ? 1 : v) * 100}%`);
  const headOpacity = useTransform(p, (v) => (reduce || v < 0.005 || v > 0.995 ? 0 : 1));

  const track = tone === "light" ? "bg-white/15" : "bg-ink/[0.07]";
  const fill = tone === "light" ? "bg-white/60" : "bg-ink/35";
  const head = tone === "light" ? "via-white" : "via-accent";

  return (
    <div ref={ref} className={`relative h-px w-full ${className}`} aria-hidden>
      <div className={`absolute inset-0 ${track}`} />
      <motion.div style={{ scaleX }} className={`absolute inset-0 origin-left ${fill}`} />
      <motion.div style={{ x: headX, opacity: headOpacity }} className="absolute inset-0">
        <span
          className={`absolute left-0 top-1/2 h-[2px] w-28 -translate-x-full -translate-y-1/2 bg-gradient-to-r from-transparent ${head} to-transparent md:w-40`}
        />
      </motion.div>
    </div>
  );
}
