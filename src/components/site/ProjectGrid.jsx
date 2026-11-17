import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { INK, usePageTransition } from "../../lib/pageTransition";
import { Reveal } from "./Reveal";

// Tampilan pengganti gambar untuk project yang belum punya screenshot.
export function Placeholder({ title, className = "text-4xl md:text-5xl" }) {
  return (
    <div className="grain relative flex h-full w-full items-center overflow-hidden bg-ink p-6 md:p-8">
      <div className="orb orb-a -right-10 -top-10 h-2/3 w-2/3 bg-accent opacity-70" aria-hidden />
      <span className={`relative font-semibold leading-none tracking-tight text-white ${className}`}>{title}</span>
    </div>
  );
}

// Kartu project. Animasi scroll-nya cukup fade-up sederhana dari <Reveal>
// (di ProjectGrid); efek hover tetap ada.
function Card({ project, index, onOpen }) {
  const to = `/projects/${project.id}`;
  const content = (
    <>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#d9dce6] transition-[border-radius] duration-500 ease-out group-hover:rounded-[28px]">
        <div className="absolute inset-0">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading={index < 2 ? "eager" : "lazy"}
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            />
          ) : (
            <div className="h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]">
              <Placeholder title={project.title} />
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" aria-hidden />
        {project.award && (
          <span className="label absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-ink">🏆 {project.award}</span>
        )}
      </div>
      <div className="mt-6 md:mt-7">
        <p className="text-sm uppercase text-ink md:text-lg">
          {project.tags.join(" • ")}
          <span className="text-ink/40"> • {project.year}</span>
        </p>
        {/* Saat hover: panah → masuk dari kiri, judul bergeser ke kanan */}
        <div className="relative mt-2 overflow-hidden md:mt-3">
          <span
            className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 text-[8vw] font-light leading-none opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 md:text-[3.6vw]"
            aria-hidden
          >
            →
          </span>
          <h3 className="text-[10vw] font-normal leading-[1.08] tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-[11vw] md:text-[4.2vw] md:group-hover:translate-x-[5vw]">
            {project.title}
          </h3>
        </div>
      </div>
    </>
  );

  // Klik kartu = buka halaman project (ala lusion: layar memudar gelap dulu).
  return (
    <Link
      to={to}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        onOpen(to);
      }}
      className="group block"
      data-cursor
    >
      {content}
    </Link>
  );
}

// Grid kartu project (dipakai di beranda dan halaman /projects), lengkap dengan
// bulatan "View" yang mengikuti kursor dan transisi ke halaman project.
export default function ProjectGrid({ items }) {
  const { go } = usePageTransition();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sx = useSpring(cx, { stiffness: 300, damping: 30 });
  const sy = useSpring(cy, { stiffness: 300, damping: 30 });

  // Klik kartu: layar memudar gelap, lalu halaman project terbuka (ala lusion).
  // Asal halaman (beranda atau /projects) dan posisi scroll dicatat supaya
  // tombol Back kembali ke tempat kartu diklik.
  const open = (to) =>
    go(to, { color: INK, state: { from: location.pathname, fromScroll: window.scrollY } });

  return (
    <>
      <div
        className="grid gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-28"
        onPointerMove={(e) => {
          cx.set(e.clientX);
          cy.set(e.clientY);
          setHovering(!!e.target.closest("[data-cursor]"));
        }}
        onPointerLeave={() => setHovering(false)}
      >
        {items.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.1}>
            <Card project={p} index={i} onOpen={open} />
          </Reveal>
        ))}
      </div>

      {!reduce && (
        <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block">
          <motion.div
            animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="-ml-12 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-sm font-medium text-white"
          >
            View
          </motion.div>
        </motion.div>
      )}

    </>
  );
}
