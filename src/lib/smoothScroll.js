import { useEffect } from "react";
import Lenis from "lenis";

// Smooth scroll (inertia) ala lusion.co memakai Lenis.
// Satu instance untuk seluruh halaman; komponen lain bisa memakainya lewat getLenis().
let instance = null;
export const getLenis = () => instance;

// Scroll ke posisi/elemen; pakai Lenis kalau aktif, kalau tidak pakai scroll bawaan.
export function scrollToTarget(target, { immediate = false, offset = 0 } = {}) {
  if (instance) {
    // force: tetap jalan walau scroll sedang dikunci (mis. saat transisi halaman).
    instance.scrollTo(target, { immediate, offset, force: true });
    return;
  }
  const top =
    typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
}

// Hentikan scroll halaman sementara (mis. saat modal terbuka).
export const lockScroll = () => instance?.stop();
export const unlockScroll = () => instance?.start();

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pengaturan sama dengan smktibazma.sch.id.
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    instance = lenis;

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    // Link "#section" atau "/#section" di halaman yang sama: meluncur halus, bukan lompat.
    const onClick = (e) => {
      const a = e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      let hash = null;
      if (href.startsWith("#")) hash = href;
      else if (href.startsWith("/#") && window.location.pathname === "/") hash = href.slice(1);
      if (!hash || hash === "#") return;
      const el = hash === "#top" ? 0 : document.querySelector(hash);
      if (el === null) return;
      e.preventDefault();
      lenis.scrollTo(el);
      window.history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
      instance = null;
    };
  }, []);
}
