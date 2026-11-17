import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Animasi scroll sederhana (seperti smktibazma.sch.id): elemen muncul memudar
// sambil naik sedikit (20px) saat masuk layar.
const SIMPLE_EASE = [0.25, 0.1, 0.25, 1];
const DURATION = 0.6;

export function Reveal({ children, delay = 0, y = 20, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: DURATION, delay, ease: SIMPLE_EASE }}
    >
      {children}
    </Tag>
  );
}

// Judul besar: tiap baris muncul memudar sambil naik sedikit.
export function LineReveal({ lines, className = "", delay = 0, as = "h2" }) {
  const reduce = useReducedMotion();
  const Tag = as;
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DURATION, delay: delay + i * 0.08, ease: SIMPLE_EASE }}
        >
          {line}
        </motion.span>
      ))}
    </Tag>
  );
}

export { EASE };
