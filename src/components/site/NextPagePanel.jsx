import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useOverscroll } from "../../lib/useOverscroll";
import { INK, usePageTransition } from "../../lib/pageTransition";

const clamp01 = (v) => Math.min(1, Math.max(0, v));

function Plus() {
  return (
    <span className="text-3xl font-light leading-none" aria-hidden>
      +
    </span>
  );
}

// Panel gelap pendek di paling bawah halaman /projects (ala lusion.co): tampil
// bersama footer putih. Setelah halaman mentok di bawah, scroll tambahan
// mengisi garis "Next page"; begitu penuh, pindah ke `to`.
export default function NextPagePanel({
  to,
  title,
  label = "Next page",
  kicker = ["Keep scrolling", "to learn more"],
  color = "#d6ff2b",
}) {
  const { go: transition } = usePageTransition();
  const fired = useRef(false);
  const go = () => {
    if (fired.current) return false;
    fired.current = true;
    const ok = transition(to, { color: INK });
    if (!ok) fired.current = false; // transisi lain masih berjalan: boleh dicoba lagi
    return ok;
  };
  const fill = useOverscroll(go);
  const titleX = useTransform(fill, (v) => `${clamp01(v) * 3}vw`);

  return (
    <section
      className="relative overflow-hidden bg-ink px-4 pb-10 pt-12 text-white md:px-16 md:pb-14 md:pt-16"
      aria-label={`${label}: ${title}`}
    >
      <p className="text-sm uppercase leading-snug md:text-base">
        {kicker[0]}
        <br />
        {kicker[1]}
      </p>

      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
        <motion.button
          type="button"
          onClick={go}
          style={{ x: titleX }}
          className="max-w-[85vw] text-left text-[13vw] font-normal uppercase leading-[0.95] tracking-[-0.03em] md:max-w-[60vw] md:text-[5vw]"
        >
          {title}
        </motion.button>
        <button type="button" onClick={go} className="group flex shrink-0 items-center gap-4 text-sm uppercase md:text-base">
          {label}
          <span className="relative h-[3px] w-40 overflow-hidden rounded-full bg-white/15 md:w-52">
            <motion.span style={{ scaleX: fill, backgroundColor: color }} className="absolute inset-0 origin-left rounded-full" />
          </span>
          <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </button>
      </div>

      <div className="mt-10 flex justify-between md:mt-14">
        {Array.from({ length: 5 }).map((_, i) => (
          <Plus key={i} />
        ))}
      </div>
    </section>
  );
}
