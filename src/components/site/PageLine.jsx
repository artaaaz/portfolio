import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

// Satu garis tebal yang meliuk dari atas sampai bawah wrapper-nya (About → Visual Stories)
// dan "tergambar" mengikuti scroll. Warnanya gradasi oranye → ungu → biru.
// Path dibuat otomatis dari tinggi halaman, jadi tetap pas kalau konten berubah.

// Posisi x (kanvas lebar 1440) untuk tiap belokan, bergantian kiri-kanan.
const XS = [820, 170, 1120, 330, 1270, 620, 140, 1180, 460, 1300];
const f = (n) => n.toFixed(1);

// Antar belokan: lengkung S (arah garis tegak di setiap belokan, jadi selalu mulus).
// Setiap belokan ke-3: putaran berbentuk lingkaran penuh.
function buildPath(height, unitsPerPx, mobile) {
  const step = (mobile ? 900 : 720) * unitsPerPx; // jarak antar belokan
  const r = (mobile ? 60 : 120) * unitsPerPx; // jari-jari putaran
  let prev = [1250, -60];
  let d = `M ${prev[0]} ${prev[1]}`;
  const curveTo = ([x, y]) => {
    const k = (y - prev[1]) * 0.55;
    d += ` C ${f(prev[0])} ${f(prev[1] + k)}, ${f(x)} ${f(y - k)}, ${f(x)} ${f(y)}`;
    prev = [x, y];
  };

  let y = step * 0.55;
  let i = 0;
  while (y < height - step * 0.4) {
    const x = XS[i % XS.length];
    curveTo([x, y]);
    if (i % 3 === 1) {
      // Titik ini ada di sisi lingkaran (arah tegak), lingkaran ke arah tengah halaman.
      const dir = x < 720 ? 1 : -1;
      const sweep = dir === 1 ? 0 : 1;
      d += ` A ${f(r)} ${f(r)} 0 1 ${sweep} ${f(x + 2 * dir * r)} ${f(y)} A ${f(r)} ${f(r)} 0 1 ${sweep} ${f(x)} ${f(y)}`;
    }
    y += step;
    i += 1;
  }
  curveTo([720, height + 80]);
  return d;
}

export default function PageLine() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.0005 });
  const pathLength = useTransform(smooth, (v) => (reduce ? 1 : Math.max(0.0005, v)));

  const geo = useMemo(() => {
    if (!size || !size.w) return null;
    const unitsPerPx = 1440 / size.w;
    const height = size.h * unitsPerPx;
    const mobile = size.w < 768;
    return { height, d: buildPath(height, unitsPerPx, mobile), stroke: (mobile ? 12 : 30) * unitsPerPx };
  }, [size]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {geo && (
        <svg viewBox={`0 0 1440 ${geo.height}`} preserveAspectRatio="xMidYMin meet" className="h-full w-full">
          <defs>
            <linearGradient id="pageline-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.height}>
              <stop offset="0%" stopColor="#ff5a2b" />
              <stop offset="30%" stopColor="#ff4f8b" />
              <stop offset="60%" stopColor="#7a5cff" />
              <stop offset="100%" stopColor="#2147ff" />
            </linearGradient>
          </defs>
          <motion.path
            d={geo.d}
            fill="none"
            stroke="url(#pageline-grad)"
            strokeWidth={geo.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
          />
        </svg>
      )}
    </div>
  );
}
