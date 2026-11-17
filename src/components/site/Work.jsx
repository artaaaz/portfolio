import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/content";
import { LineReveal, Reveal } from "./Reveal";
import ProjectGrid from "./ProjectGrid";

// Jumlah project yang tampil di beranda; sisanya ada di halaman /projects.
const HOME_COUNT = 6;

export default function Work() {
  return (
    <section id="work" className="px-4 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-start">
          <LineReveal
            lines={["Featured Work"]}
            className="text-[15vw] font-normal leading-[0.95] tracking-[-0.035em] md:whitespace-nowrap md:text-[7.6vw]"
          />
          <Reveal delay={0.1} className="max-w-md md:pt-4">
            <p className="text-sm uppercase leading-relaxed tracking-[0.01em] text-ink md:text-base">
              Selected interface, frontend, and full-stack projects — from research and wireframes to shipped code.
            </p>
            <p className="label mt-4 text-muted">({String(projects.length).padStart(2, "0")} projects)</p>
          </Reveal>
        </div>

        <ProjectGrid items={projects.slice(0, HOME_COUNT)} />

        <Reveal className="mt-20 flex justify-center md:mt-28">
          <Link to="/projects" className="pill pill-dark h-14 px-7 text-base">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
            See all projects ({projects.length})
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
