import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SPMB",
    subtitle: "School Admission Platform",
    description:
      "End-to-end digital platform for school admission management. Built a comprehensive design system, responsive UI/UX, and high-converting branding assets from concept to deployment.",
    image: "/projects/spmb.jpg",
  },
  {
    title: "Mention",
    subtitle: "Landing Page & Branding",
    description:
      "Brand identity, presentation design, and digital publication layouts. Crafted a cohesive visual language across campaign materials, informational graphics, and celebration marketing.",
    image: "/projects/mention.jpg",
  },
  {
    title: "Dashboard Sekolah",
    subtitle: "Management System",
    description:
      "Internal management platform for school administration, featuring student data management, scheduling, and reporting tools designed for efficiency and clarity.",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Kredit Motor",
    subtitle: "Fintech Application",
    description:
      "Fintech platform for motorcycle credit financing, streamlining loan applications, approval workflows, and payment tracking for dealers and customers.",
    image: "/projects/kredit.jpg",
  },
];

const ProjectHighlights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      const total = cards.length;
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 16 : 24;

      // Base y offsets for the stack (stable positions)
      const offsets = Array.from({ length: total }, (_, i) => i * offset);

      // Set initial state: stable stacked positions
      // Card 1: y: 0, z-index: 4
      // Card 2: y: 24, z-index: 3
      // Card 3: y: 48, z-index: 2
      // Card 4: y: 72, z-index: 1
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: offsets[i],
          zIndex: total - i,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      // Single timeline controlling the entire stack
      // Each card gets its own segment (1/total of the timeline)
      // This ensures the pin holds until ALL cards are done
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

      // Sequential segments: each card slides off, remaining cards shift up
      for (let i = 0; i < total; i++) {
        const segStart = i * segmentDuration;

        // Current card slides off (except the last one, which stays as final)
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

        // Remaining cards shift up by one position
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl h-[80vh] mx-6 md:mx-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="project-highlight-card absolute inset-0 rounded-[32px] overflow-hidden select-none bg-white"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="w-full h-full border border-neutral-200/80 rounded-[32px] overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full p-6 md:p-8 lg:p-10 gap-6 lg:gap-0">
                  {/* Left: Info — 45% */}
                  <div className="lg:w-[45%] flex flex-col justify-center pr-0 lg:pr-10">
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
                  <div className="lg:w-[55%] h-full min-h-[200px] lg:min-h-0">
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
    </section>
  );
};

export default ProjectHighlights;