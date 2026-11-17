import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "../../data/content";
import { Reveal } from "./Reveal";
import RunLine from "./RunLine";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

// Kalimat besar yang "menyala" kata per kata mengikuti scroll.
function ScrollText({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  if (reduce) return <p ref={ref}>{text}</p>;
  return (
    <p ref={ref} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-4 pb-24 pt-28 md:px-8 md:pb-36 md:pt-40">
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Kiri: foto (menempel saat discroll di desktop) */}
          <div className="md:col-span-5">
            <Reveal className="md:sticky md:top-24">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-[#d9dce6]">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

          {/* Kanan: teks */}
          <div className="flex flex-col md:col-span-7 md:py-4">
            <Reveal>
              <p className="label text-muted">(About)</p>
            </Reveal>
            <div className="mt-6 text-[8vw] font-normal leading-[1.08] tracking-[-0.03em] md:text-[3.3vw]">
              <ScrollText text={profile.intro} />
            </div>

            <Reveal delay={0.1} className="mt-12 max-w-xl md:mt-16">
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Hello! I'm {profile.name}.</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">{profile.bio}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2">
              <a href="#work" className="pill pill-dark">
                See my work <span aria-hidden>→</span>
              </a>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="pill pill-light">
                Download CV <span aria-hidden>↓</span>
              </a>
            </Reveal>

            <Reveal delay={0.3} className="max-w-xl">
              <RunLine className="mt-10" />
              <dl className="grid grid-cols-2 gap-x-4 gap-y-5 pt-6 text-sm sm:grid-cols-3">
                <div className="col-span-2 sm:col-span-1">
                  <dt className="label text-muted">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${profile.email}`} className="hover:text-accent">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Phone</dt>
                  <dd className="mt-1">
                    <a href={profile.phoneHref} className="hover:text-accent">
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Location</dt>
                  <dd className="mt-1">{profile.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
