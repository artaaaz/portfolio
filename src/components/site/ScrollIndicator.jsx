import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToTarget } from "../../lib/smoothScroll";

// Indikator scroll kecil di sisi kanan layar (pengganti scrollbar bawaan di desktop).
// Bisa juga ditarik untuk scroll.
export default function ScrollIndicator() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll();
  // Thumb bergerak dari atas ke bawah track: top = p%, lalu digeser -p% dari tingginya sendiri.
  const top = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const y = useTransform(scrollYProgress, (v) => `${-v * 100}%`);

  const scrollToPointer = (clientY) => {
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollToTarget(ratio * max, { immediate: true });
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    scrollToPointer(e.clientY);
  };
  const onPointerMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) scrollToPointer(e.clientY);
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      className="group fixed bottom-4 right-1.5 top-4 z-[60] hidden w-3 cursor-grab touch-none active:cursor-grabbing md:block"
      aria-hidden
    >
      <motion.div
        style={{ top, y }}
        className="absolute right-0.5 h-12 w-[5px] rounded-full bg-ink/70 transition-[width,background-color] duration-200 group-hover:w-[7px] group-hover:bg-ink"
      />
    </div>
  );
}
