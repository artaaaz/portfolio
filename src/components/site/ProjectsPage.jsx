import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, MotionConfig, useReducedMotion } from "framer-motion";
import { projects } from "../../data/content";
import Header from "./Header";
import ProjectsFooter from "./ProjectsFooter";
import ProjectGrid from "./ProjectGrid";
import ScrollIndicator from "./ScrollIndicator";
import { EASE } from "./Reveal";
import { scrollToTarget } from "../../lib/smoothScroll";

// Angka yang menghitung naik dari 0 ke total project.
function CountUp({ to, delay = 0 }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) return;
    const c = animate(0, to, { duration: 1.4, delay, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [to, delay, reduce]);
  return <>{n}</>;
}

function ArrowDownRight() {
  const draw = (delay) => ({
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 0.8, delay, ease: EASE },
  });
  return (
    <svg viewBox="0 0 64 64" className="h-[7vw] w-[7vw] md:h-[4.4vw] md:w-[4.4vw]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <motion.path d="M6 6 L58 58" {...draw(0.9)} />
      <motion.path d="M58 22 L58 58 L22 58" {...draw(1.4)} />
    </svg>
  );
}

// Halaman /projects: semua project.
export default function ProjectsPage() {
  const reduce = useReducedMotion();
  const letters = "PROJECTS".split("");

  useEffect(() => {
    scrollToTarget(0, { immediate: true });
    document.title = "Projects — Erlangga Artha";
    return () => {
      document.title = "Erlangga Artha — Frontend Developer & UI/UX Designer";
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <ScrollIndicator />
      <main>
        <section id="top" className="px-4 pb-16 pt-32 md:px-8 md:pb-28 md:pt-48">
          <div className="mx-auto flex max-w-[1600px] items-start justify-between gap-4">
            <h1
              aria-label="Projects"
              className="flex text-[15.5vw] font-normal leading-[0.86] tracking-[-0.015em] md:text-[17.6vw]"
            >
              {letters.map((l, i) => (
                <span key={i} className="-mb-[0.06em] inline-block overflow-hidden pb-[0.06em]" aria-hidden>
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: EASE }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <div className="flex shrink-0 flex-col items-end justify-between self-stretch py-[1vw]">
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="text-[7vw] font-light leading-none tabular-nums md:text-[4.6vw]"
              >
                <CountUp to={projects.length} delay={0.5} />
              </motion.span>
              <ArrowDownRight />
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-10 flex max-w-[1600px] flex-col justify-between gap-4 text-sm uppercase md:mt-16 md:flex-row md:text-base"
          >
            <p className="max-w-md">
              Every interface, frontend, and full-stack project — from research and wireframes to shipped code.
            </p>
            <Link to="/" className="group self-start whitespace-nowrap md:self-auto">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to home
            </Link>
          </motion.div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-36">
          <div className="mx-auto max-w-[1600px]">
            <ProjectGrid items={projects} />
          </div>
        </section>
      </main>
      <ProjectsFooter />
    </MotionConfig>
  );
}
