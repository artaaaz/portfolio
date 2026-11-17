import React, { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { profile } from "../../data/content";

// Preloader hanya tampil saat web pertama kali dibuka langsung di beranda.
// Kalau web dibuka dari halaman lain (mis. /projects) lalu pindah ke beranda,
// atau kembali ke beranda di kunjungan yang sama, tidak perlu loading lagi.
let shownOnce = typeof window !== "undefined" && window.location.pathname !== "/";
let started = false;
let finished = false;
const listeners = new Set();

function markDone() {
  if (finished) return;
  finished = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

// true setelah preloader membuka halaman (dipakai Hero untuk mulai animasi judul).
export function usePreloaderDone() {
  const [done, setDone] = useState(finished);
  useEffect(() => {
    if (finished) {
      setDone(true);
      return undefined;
    }
    const fn = () => setDone(true);
    listeners.add(fn);
    return () => listeners.delete(fn);
  }, []);
  return done;
}

// Preloader singkat: hitungan 0–100, lalu layar hitam naik ke atas dan
// halaman terbuka. Konten tetap dirender di belakangnya.
export default function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(() => !shownOnce);
  const rootRef = useRef(null);

  useEffect(() => {
    // Jalan sekali saja (StrictMode menjalankan effect dua kali di mode dev).
    if (started) return;
    started = true;
    if (shownOnce || reduce) {
      shownOnce = true;
      setVisible(false);
      markDone();
      return;
    }
    shownOnce = true;

    (async () => {
      // Hitungan & bar berjalan pelan dan rata (durasi dalam detik).
      await animate(0, 100, {
        duration: 2.8,
        ease: [0.45, 0.05, 0.35, 1],
        onUpdate: (v) => setCount(Math.round(v)),
      });
      await new Promise((r) => setTimeout(r, 350));
      markDone();
      if (rootRef.current) {
        await animate(rootRef.current, { y: "-100%" }, { duration: 1.1, ease: [0.76, 0, 0.24, 1] });
      }
      setVisible(false);
    })();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex items-end justify-between bg-ink p-5 text-white md:p-10"
      aria-hidden
    >
      {/* Bar loading berbentuk kotak di tengah, terisi sesuai hitungan */}
      <div className="absolute left-1/2 top-1/2 h-6 w-[75vw] -translate-x-1/2 -translate-y-1/2 bg-white/10 md:h-8 md:w-[40vw]">
        <div className="h-full origin-left bg-white" style={{ transform: `scaleX(${count / 100})` }} />
      </div>

      <span className="text-xl font-semibold tracking-tight">{profile.short}®</span>
      <span className="text-[22vw] font-semibold leading-[0.8] tracking-[-0.05em] tabular-nums md:text-[12vw]">
        {count}
      </span>
    </div>
  );
}
