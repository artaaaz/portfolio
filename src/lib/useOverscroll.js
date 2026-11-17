import { useEffect, useRef } from "react";
import { animate, useMotionValue, useSpring } from "framer-motion";

const clamp01 = (v) => Math.min(1, Math.max(0, v));
// Jarak "scroll lebih" (px roda mouse) untuk mengisi garis sampai penuh.
export const OVERSCROLL_DISTANCE = 1100;

const atBottom = () =>
  window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

// Setelah halaman mentok di bawah, scroll tambahan (roda mouse, swipe, tombol
// panah) mengisi progres 0→1; begitu penuh, onComplete dipanggil. Kalau
// berhenti, progres pelan-pelan kembali ke 0. Mengembalikan nilai progres (spring).
export function useOverscroll(onComplete) {
  const progress = useMotionValue(0);
  const fill = useSpring(progress, { stiffness: 220, damping: 32 });
  const done = useRef(false);
  const cb = useRef(onComplete);
  cb.current = onComplete;

  useEffect(() => {
    let idle;
    let decay;
    let touchY = null;

    const push = (delta) => {
      if (done.current) return;
      if (delta > 0 && !atBottom()) return;
      decay?.stop();
      const v = clamp01(progress.get() + delta / OVERSCROLL_DISTANCE);
      progress.set(v);
      if (v >= 1) {
        done.current = true;
        // Ditolak (mis. transisi lain masih berjalan)? Reset supaya bisa diulang.
        if (cb.current() === false) {
          done.current = false;
          progress.set(0);
        }
        return;
      }
      clearTimeout(idle);
      idle = setTimeout(() => {
        decay = animate(progress, 0, { duration: 0.9, ease: [0.4, 0, 0.2, 1] });
      }, 500);
    };

    const onWheel = (e) => push(e.deltaY);
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchY == null) return;
      const y = e.touches[0].clientY;
      push((touchY - y) * 2);
      touchY = y;
    };
    const onKey = (e) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) push(220);
      if (["ArrowUp", "PageUp"].includes(e.key)) push(-220);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(idle);
      decay?.stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [progress]);

  return fill;
}
