import React from "react";
import { services, tools } from "../../data/content";
import { LineReveal, Reveal } from "./Reveal";
import RunLine from "./RunLine";

function Marquee({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee overflow-hidden" aria-hidden>
      <div className={`marquee-track gap-3 pr-3 ${reverse ? "marquee-reverse" : ""}`} style={{ "--duration": "45s" }}>
        {doubled.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-xl font-medium tracking-tight md:text-3xl"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const half = Math.ceil(tools.length / 2);
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <LineReveal
              lines={["What I do", "(and love doing)"]}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl"
            />
          </div>
          <ul className="md:col-span-7">
            <li aria-hidden>
              <RunLine />
            </li>
            {services.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 0.06}>
                <div className="group grid grid-cols-[3rem_1fr] gap-x-4 py-6 md:grid-cols-[4rem_1fr_1fr] md:py-8">
                  <span className="label pt-2 text-muted">{s.num}</span>
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="col-start-2 mt-2 text-ink/60 md:col-start-3 md:mt-1">{s.text}</p>
                </div>
                <RunLine />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 space-y-3 md:mt-32">
        <p className="label mx-auto mb-6 max-w-[1600px] px-4 text-muted md:px-8">Tools I'm fluent in</p>
        <p className="sr-only">{tools.join(", ")}</p>
        <Marquee items={tools.slice(0, half)} />
        <Marquee items={tools.slice(half)} reverse />
      </div>
    </section>
  );
}
