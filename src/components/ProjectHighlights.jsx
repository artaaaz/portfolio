import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SPMB",
    subtitle: "School Admission Platform",
    category: "Web Design & System Development",
    tools: "React, GSAP, TailwindCSS, Figma",
    year: "2026",
    description:
      "End-to-end digital platform for school admission management. Built a comprehensive design system, responsive UI/UX, and high-converting branding assets from concept to deployment.",
    image: "/projects/spmb.jpg",
  },
  {
    title: "Mention",
    subtitle: "Landing Page & Branding",
    category: "Branding & Social Media Kit",
    tools: "Illustrator, Canva, Figma",
    year: "2025",
    description:
      "Brand identity, presentation design, and digital publication layouts. Crafted a cohesive visual language across campaign materials, informational graphics, and celebration marketing.",
    image: "/projects/mention.jpg",
  },
  {
    title: "Dashboard Sekolah",
    subtitle: "Management System",
    category: "UI/UX Design & Dashboard Development",
    tools: "React, TailwindCSS, Chart.js",
    year: "2025",
    description:
      "Internal management platform for school administration, featuring student data management, scheduling, and reporting tools designed for efficiency and clarity.",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Kredit Motor",
    subtitle: "Fintech Application",
    category: "Fintech Mobile App Design",
    tools: "Figma, Photoshop, CapCut",
    year: "2025",
    description:
      "Fintech platform for motorcycle credit financing, streamlining loan applications, approval workflows, and payment tracking for dealers and customers.",
    image: "/projects/kredit.jpg",
  },
];

const ProjectHighlights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const mm = gsap.matchMedia();

    // Desktop: Pin and animate card stack
    mm.add("(min-width: 768px)", () => {
      const total = cards.length;
      const offset = 24;
      const offsets = Array.from({ length: total }, (_, i) => i * offset);

      // Initial layout setup
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          y: offsets[i],
          zIndex: total - i,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      const segmentDuration = 1 / total;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 1200}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < total; i++) {
        const segStart = i * segmentDuration;

        if (i < total - 1) {
          tl.to(
            cards[i],
            {
              y: "-100%",
              duration: segmentDuration,
              ease: "none",
              force3D: true,
            },
            segStart
          );
        }

        for (let j = i + 1; j < total; j++) {
          const targetY = (j - i - 1) * offset;
          tl.to(
            cards[j],
            {
              y: targetY,
              duration: segmentDuration,
              ease: "none",
              force3D: true,
            },
            segStart
          );
        }
      }
    });

    // Mobile: Reset styles to let normal flow layout override GSAP
    mm.add("(max-width: 767px)", () => {
      cards.forEach((card) => {
        if (card) gsap.set(card, { clearProps: "all" });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <div className="min-h-screen md:h-screen flex items-center justify-center overflow-visible md:overflow-hidden py-12 md:py-0">
        <div className="relative w-full max-w-7xl h-auto md:h-[80vh] mx-6 md:mx-12 flex flex-col gap-8 md:block">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="project-highlight-card relative md:absolute md:inset-0 rounded-[24px] md:rounded-[32px] overflow-hidden select-none bg-white w-full h-auto md:h-full"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="w-full h-full border border-neutral-200/80 rounded-[24px] md:rounded-[32px] overflow-hidden bg-white">
                <div className="flex flex-col lg:flex-row h-full p-6 md:p-8 lg:p-10 gap-6 lg:gap-0">
                  {/* Left: Info — 45% */}
                  <div className="lg:w-[45%] flex flex-col justify-center pr-0 lg:pr-10 mb-4 lg:mb-0">
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase">
                        Project {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="w-8 h-px bg-neutral-300" />
                    </div>

                    <h3 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-black text-neutral-900 leading-[0.92] tracking-[-0.04em] mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-neutral-400 font-medium mb-4 tracking-wide">
                      {project.subtitle}
                    </p>

                    <p className="text-sm md:text-[15px] text-neutral-500 leading-[1.7] max-w-sm tracking-tight">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="group inline-flex items-center gap-2 text-xs font-medium text-neutral-900 tracking-[0.15em] uppercase transition-all duration-500 hover:gap-4"
                      >
                        <span className="relative">
                          View Project
                          <span className="absolute bottom-0 left-0 w-full h-px bg-neutral-900 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                          <path
                            d="M1 7H13M13 7L7 1M13 7L7 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Right: Image — 55% */}
                  <div className="lg:w-[55%] w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-full min-h-[220px] lg:min-h-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="w-full h-full object-cover"
                        style={{ willChange: "transform" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          const parent = e.target.parentElement;
                          if (parent) {
                            parent.style.background =
                              `hsl(${index * 90 + 200}, 20%, 90%)`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectHighlights;