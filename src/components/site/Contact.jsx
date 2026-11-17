import React from "react";
import { profile, socials } from "../../data/content";
import { LineReveal, Reveal } from "./Reveal";
import RunLine from "./RunLine";

export default function Contact() {
  return (
    <footer id="contact" className="p-2 md:p-3">
      <div className="grain relative overflow-hidden rounded-3xl bg-accent px-5 pb-8 pt-20 text-white md:rounded-4xl md:px-10 md:pb-10 md:pt-32">
        <div className="orb orb-b -right-20 top-0 h-[40vw] w-[40vw] bg-[#7fd1ff] opacity-40" aria-hidden />

        <div className="relative">
          <p className="label text-white/70">Thank you for scrolling all the way down.</p>
          <LineReveal
            lines={["Have an idea?", "Let's collaborate."]}
            className="mt-6 text-[12vw] font-semibold leading-[0.9] tracking-[-0.045em] md:text-[8vw]"
          />

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
            <a href={`mailto:${profile.email}`} className="pill h-14 bg-white px-6 text-base text-ink hover:bg-ink hover:text-white">
              {profile.email} <span aria-hidden>↗</span>
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="pill h-14 border border-white/40 px-6 text-base hover:bg-white hover:text-ink">
              Download CV <span aria-hidden>↓</span>
            </a>
          </Reveal>

          <RunLine tone="light" end="92%" className="mt-24 md:mt-36" />
          <div className="grid gap-8 pt-8 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="label text-white/60">Phone</p>
              <a href={profile.phoneHref} className="mt-2 block hover:underline">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="label text-white/60">Location</p>
              <p className="mt-2">{profile.location}</p>
            </div>
            <div>
              <p className="label text-white/60">Social</p>
              <ul className="mt-2 space-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-4 md:items-end md:text-right">
              <a href="#top" className="pill pill-light self-start md:self-end">
                Back to top <span aria-hidden>↑</span>
              </a>
              <p className="text-white/60">© {new Date().getFullYear()} {profile.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
