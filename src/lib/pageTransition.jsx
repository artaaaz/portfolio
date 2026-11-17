import React, { createContext, useCallback, useContext, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { animate, useReducedMotion } from "framer-motion";
import { getLenis, scrollToTarget } from "./smoothScroll";

// Transisi antar halaman ala lusion.co.
//
// go(to, { color })   : layar memudar ke satu warna, halaman berganti di
//                       baliknya, lalu warna memudar keluar.
// goMorph(to, {...})  : khusus "Next project". Panel terang di kanan melebar
//                       menutup layar sambil judul project berikutnya bergeser
//                       ke kiri, latar berubah terang -> gelap, halaman berganti,
//                       lalu judul pindah ke posisi judul di halaman baru.

export const INK = "#0e0f12";
export const PAPER = "#eceef4";
const EASE = [0.76, 0, 0.24, 1];
const SOFT = [0.4, 0, 0.2, 1];

// Blokir input scroll selama transisi tanpa mengubah layout halaman
// (mengunci lewat Lenis memberi overflow:hidden pada <html>, yang membuat
// bagian sticky melompat).
const KEYS = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "]);
function blockInput() {
  const stop = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  const key = (e) => KEYS.has(e.key) && stop(e);
  const opts = { capture: true, passive: false };
  window.addEventListener("wheel", stop, opts);
  window.addEventListener("touchmove", stop, opts);
  window.addEventListener("keydown", key, true);
  return () => {
    window.removeEventListener("wheel", stop, opts);
    window.removeEventListener("touchmove", stop, opts);
    window.removeEventListener("keydown", key, true);
  };
}

const frame = () => new Promise((r) => requestAnimationFrame(() => r()));

// Tujuan scroll: angka (px) atau selector section (mis. "#contact").
const resolveTarget = (t) => (typeof t === "string" ? document.querySelector(t) || 0 : t || 0);

// Tombol Back browser ditekan di tengah transisi? Jangan timpa dengan navigate().
function watchPop() {
  const state = { popped: false };
  const on = () => {
    state.popped = true;
  };
  window.addEventListener("popstate", on);
  state.stop = () => window.removeEventListener("popstate", on);
  return state;
}

const TransitionContext = createContext(null);

// const { go, goMorph, cameViaMorph } = usePageTransition();
export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const busy = useRef(false);
  const morphing = useRef(false);
  const fadeRef = useRef(null);
  const morphRef = useRef(null);
  const morphTitleRef = useRef(null);
  const unblock = useRef(null);
  // Tujuan scroll di halaman baru: 0 = paling atas, angka = posisi semula
  // (tombol Back), atau selector section (mis. "#contact").
  const targetY = useRef(0);

  // Scroll ke tujuan. Batas tinggi Lenis diperbarui dulu supaya tidak terpotong
  // tinggi halaman sebelumnya.
  const restore = useCallback(() => {
    getLenis()?.resize?.();
    scrollToTarget(resolveTarget(targetY.current), { immediate: true });
  }, []);

  const swap = useCallback(
    (to, state) => {
      navigate(to, { state });
      scrollToTarget(0, { immediate: true });
    },
    [navigate]
  );

  const lock = () => {
    unblock.current?.();
    unblock.current = blockInput();
  };

  const finish = useCallback(() => {
    restore();
    unblock.current?.();
    unblock.current = null;
    busy.current = false;
    morphing.current = false;
  }, [restore]);

  // Mengembalikan false kalau ditolak (transisi lain masih berjalan), supaya
  // pemanggil bisa mencoba lagi nanti.
  const go = useCallback(
    (to, { color = INK, state, scroll = 0 } = {}) => {
      if (busy.current) return false;
      busy.current = true;
      targetY.current = scroll;
      lock();
      if (reduce) {
        swap(to, state);
        requestAnimationFrame(() => requestAnimationFrame(finish));
        return true;
      }
      (async () => {
        const pop = watchPop();
        const el = fadeRef.current;
        el.style.backgroundColor = color;
        el.style.display = "block";
        await animate(el, { opacity: [0, 1] }, { duration: 0.5, ease: SOFT });
        pop.stop();
        if (!pop.popped) swap(to, state);
        else targetY.current = 0;
        await frame();
        await frame();
        await frame();
        // Halaman tujuan sudah dirender: scroll ke tujuan sebelum layar dibuka.
        restore();
        await animate(el, { opacity: [1, 0] }, { duration: 0.7, ease: SOFT });
        el.style.display = "none";
        finish();
      })();
      return true;
    },
    [reduce, swap, finish, restore]
  );

  const runMorph = useCallback(
    async (to, { panel, title, state }) => {
      targetY.current = 0;
      morphing.current = true;
      const pop = watchPop();
      const pr = panel.getBoundingClientRect();
      const tr = title.getBoundingClientRect();
      lock();

      const ov = morphRef.current;
      const tt = morphTitleRef.current;
      const startLeft = Math.max(0, pr.left);
      const padLeft = window.innerWidth >= 768 ? 64 : 16;

      const startColor = getComputedStyle(title).color;
      const startSize = parseFloat(getComputedStyle(title).fontSize);
      // Judul kecil (mis. Prev project) ikut membesar ke ukuran judul besar.
      const bigSize = Math.max(startSize, window.innerWidth * (window.innerWidth >= 768 ? 0.052 : 0.13));
      // Judul dipecah per kata supaya tiap kata bisa pindah ke posisinya masing-
      // masing di judul halaman baru (juga saat judul tujuan terbagi 2 baris).
      tt.textContent = "";
      const words = title.textContent.trim().split(/\s+/).map((w, i, all) => {
        const el = document.createElement("span");
        el.textContent = w;
        el.style.display = "inline-block";
        if (i < all.length - 1) el.style.marginRight = "0.22em";
        tt.appendChild(el);
        return el;
      });
      Object.assign(ov.style, {
        display: "block",
        opacity: "1",
        backgroundColor: PAPER,
        clipPath: `inset(0px 0px 0px ${startLeft}px)`,
      });
      Object.assign(tt.style, {
        left: `${tr.left}px`,
        top: `${tr.top}px`,
        fontSize: getComputedStyle(title).fontSize,
        color: startColor,
      });

      // 1. Satu gerakan: panel terang melebar ke kiri sambil warnanya berubah
      //    ke latar gelap, judul ikut bergeser ke kiri dan jadi putih.
      await Promise.all([
        animate(ov, { clipPath: [`inset(0px 0px 0px ${startLeft}px)`, "inset(0px 0px 0px 0px)"] }, { duration: 0.9, ease: EASE }),
        animate(ov, { backgroundColor: [PAPER, INK] }, { duration: 0.8, delay: 0.15, ease: SOFT }),
        animate(tt, { left: `${padLeft}px`, top: `${startSize === bigSize ? tr.top : window.innerHeight / 2 - bigSize / 2}px`, fontSize: `${bigSize}px` }, { duration: 0.9, ease: EASE }),
        animate(tt, { color: [startColor, "#ffffff"] }, { duration: 0.8, delay: 0.15, ease: SOFT }),
      ]);

      // 2. Ganti halaman di balik layar, lalu judul pindah ke posisi judul baru.
      pop.stop();
      if (pop.popped) {
        await animate(ov, { opacity: [1, 0] }, { duration: 0.45, ease: SOFT });
        ov.style.display = "none";
        finish();
        return;
      }
      swap(to, state);
      await frame();
      await frame();
      await frame();
      const hero = document.querySelector("[data-hero-title]");
      const heroWords = hero ? [...hero.querySelectorAll(":scope > span")] : [];
      if (hero && heroWords.length === words.length) {
        // Tiap kata pindah ke posisi kata yang sama di judul baru (FLIP).
        const heroSize = getComputedStyle(hero).fontSize;
        const from = words.map((w) => w.getBoundingClientRect());
        const curSize = getComputedStyle(tt).fontSize;
        words.forEach((w, i) =>
          Object.assign(w.style, {
            position: "fixed",
            left: `${from[i].left}px`,
            top: `${from[i].top}px`,
            margin: "0",
            fontSize: curSize,
          })
        );
        await Promise.all(
          words.map((w, i) => {
            const r = heroWords[i].getBoundingClientRect();
            return animate(
              w,
              { left: `${r.left}px`, top: `${r.top}px`, fontSize: heroSize },
              { duration: 0.7, delay: i * 0.04, ease: EASE }
            );
          })
        );
      } else if (hero) {
        const r = hero.getBoundingClientRect();
        await animate(
          tt,
          { left: `${r.left}px`, top: `${r.top}px`, fontSize: getComputedStyle(hero).fontSize },
          { duration: 0.6, ease: EASE }
        );
      }

      // 3. Layar memudar, isi halaman baru terlihat.
      await animate(ov, { opacity: [1, 0] }, { duration: 0.45, ease: SOFT });
      ov.style.display = "none";
      finish();
    },
    [swap, finish]
  );

  const goMorph = useCallback(
    (to, opts) => {
      if (busy.current) return false;
      if (reduce || !opts.panel || !opts.title) return go(to, { color: PAPER, state: opts.state });
      busy.current = true;
      runMorph(to, opts);
      return true;
    },
    [reduce, go, runMorph]
  );

  const value = useMemo(() => ({ go, goMorph, cameViaMorph: () => morphing.current }), [go, goMorph]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      {/* Lapisan transisi: di bawah header (z-50) supaya header tetap terlihat */}
      <div ref={fadeRef} aria-hidden className="fixed inset-0 z-[45] hidden opacity-0" />
      <div ref={morphRef} aria-hidden className="fixed inset-0 z-[45] hidden overflow-hidden">
        <span
          ref={morphTitleRef}
          className="absolute whitespace-nowrap font-normal leading-[0.95] tracking-[-0.03em]"
        />
      </div>
    </TransitionContext.Provider>
  );
}
