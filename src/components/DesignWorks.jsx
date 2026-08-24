import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const designProjects = [
  {
    id: "01",
    date: "Apr 2026",
    title: "CYBERDOME",
    category: "WEB / FULLSTACK",
    image: "/image/12.png",
    tools: "Next.js, TailwindCSS, Express.js, MongoDB",
    description: "CYBERDOME is a high-performance web platform and full-stack system designed for digital event archiving, immersive cyber-exhibitions, and tech showcases."
  },
  {
    id: "02",
    date: "Feb 2026",
    title: "XINNA",
    category: "UI / UX",
    image: "/image/UIUX.png",
    tools: "Figma, ProtoPie, Adobe Illustrator",
    description: "XINNA is a mobile application design focused on user wellness, featuring a clean brutalist layout, high contrast navigation, and intuitive interactive elements."
  },
  {
    id: "03",
    date: "Jan 2026",
    title: "SPMB SYSTEM",
    category: "WEB DEVELOPMENT",
    image: "/image/15.png",
    tools: "React, GSAP, TailwindCSS, PostgreSQL",
    description: "New Student Admission System for school admission management. Built a comprehensive design system, responsive UI/UX, and high-converting branding assets."
  },
  {
    id: "04",
    date: "Oct 2024",
    title: "SMK TI BAZMA",
    category: "WEB DEVELOPMENT",
    image: "/image/mockup.png",
    tools: "WordPress, TailwindCSS, PHP",
    description: "Official landing page and database web platform for SMK TI BAZMA school, streamlining information access for students, parents, and administrative staff."
  },
  {
    id: "05",
    date: "2025",
    title: "ROBOOST",
    category: "SOCIAL MEDIA",
    image: "/image/114.png",
    tools: "Photoshop, Figma, Canva",
    description: "Robust visual content direction and monthly social media branding kit for Roboost, boosting engagement with custom editorial and brutalist graphics."
  },
  {
    id: "06",
    date: "2025",
    title: "MENTION",
    category: "UI/UX & PRODUCT DESIGN",
    image: "/image/mention.png",
    tools: "Figma, Illustrator, CapCut",
    description: "Perancangan UI aplikasi Mention untuk kebutuhan branding, loyalty, dan pengalaman pengguna dalam satu platform.",
    achievement: "3rd Winner — National UI/UX Competition"
  },
  {
    id: "07",
    date: "2025",
    title: "HIMPANA EVENT",
    category: "VISUAL DESIGN",
    image: "/image/poster1.png",
    tools: "Illustrator, Photoshop",
    description: "Creative publication materials, X-banners, posters, and printed media designs for the Himpana national working meeting and conference event."
  },
  {
    id: "08",
    date: "2025",
    title: "MAJALAH PRISMA",
    category: "LAYOUT DESIGN",
    image: "/image/poster2.png",
    tools: "InDesign, Photoshop",
    description: "Editorial cover design and internal layout styling for PRISMA Magazine, featuring clean grids, high contrast typography, and custom illustrations."
  }
];

const DesignWorks = () => {
  const containerRef = useRef(null);
  const previewRef = useRef(null);
  const [activeImage, setActiveImage] = useState(designProjects[0].image);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Coordinates helper for GSAP quickTo
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    // Preload images to prevent loading flashes/delay
    designProjects.forEach((proj) => {
      const img = new Image();
      img.src = proj.image;
    });

    // Initialize GSAP quickTo for smooth cursor tracking
    if (previewRef.current) {
      gsap.set(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        xPercent: 5,
        yPercent: 5
      });
      xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.35, ease: "power3.out" });
      yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.35, ease: "power3.out" });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (xTo.current && yTo.current) {
      // Offset slightly to the right and bottom so it doesn't block the row or cursor
      xTo.current(e.clientX + 25);
      yTo.current(e.clientY + 25);
    }
  };

  const handleMouseEnterSection = () => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeaveSection = () => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <>
      <section 
        ref={containerRef}
        className="relative w-full bg-white border-t border-neutral-100 py-16 md:py-24 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnterSection}
        onMouseLeave={handleMouseLeaveSection}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">
          
          {/* === HEADER BLOCK === */}
          <div className="mb-12 md:mb-16 font-sans">
            <span className="text-xs font-mono tracking-widest text-[#2147ff] font-bold mb-3 uppercase select-none block">
              // PROYEK PROFESIONAL
            </span>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed select-none font-light">
              Kumpulan proyek yang saya kembangkan dari kebutuhan nyata, mulai dari perancangan hingga implementasi solusi yang fungsional, interaktif, dan berdampak.
            </p>
          </div>

          {/* === ROW LIST === */}
          <div className="w-full flex flex-col border-t border-neutral-200 font-sans">
            {designProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setActiveImage(project.image)}
                className="group relative w-full flex flex-col md:flex-row md:items-center justify-between py-6 md:py-10 border-b border-neutral-200 cursor-pointer select-none px-2 transition-all duration-300 hover:bg-neutral-50"
              >
                {/* Left: Date + Title */}
                <div className="flex flex-row items-center gap-6 md:gap-12 lg:gap-24 flex-grow">
                  {/* Date */}
                  <span className="text-xs md:text-sm font-mono text-neutral-400 group-hover:text-[#2147ff] transition-colors duration-300 min-w-[75px] md:min-w-[100px]">
                    {project.date}
                  </span>
                  
                  {/* Title (Oversized typography) */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                    <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tighter uppercase transition-all duration-300 group-hover:text-[#2147ff] group-hover:translate-x-3">
                      {project.title}
                    </h3>
                    {project.achievement && (
                      <span className="text-[10px] font-mono font-bold text-[#2147ff] border border-[#2147ff]/20 bg-[#2147ff]/5 px-2 py-0.5 rounded uppercase tracking-wider md:ml-4 select-none inline-block">
                        🏆 {project.achievement}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Category + Arrow */}
                <div className="flex flex-row items-center justify-between md:justify-end gap-6 md:gap-16 mt-3 md:mt-0">
                  {/* Category */}
                  <span className="text-xs md:text-sm font-mono tracking-widest text-neutral-400 uppercase transition-colors duration-300 group-hover:text-[#2147ff]">
                    {project.category}
                  </span>

                  {/* Arrow icon */}
                  <span className="text-base md:text-4xl font-light text-neutral-400 transition-all duration-300 group-hover:text-[#2147ff] group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>

                {/* Mobile Preview Image (shown inside row on mobile viewports) */}
                <div className="block md:hidden mt-4 w-full aspect-[16/10] rounded-xl overflow-hidden border border-neutral-100 bg-neutral-50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* === DESKTOP FLOATING PREVIEW IMAGE === */}
        <div
          ref={previewRef}
          className="hidden md:block fixed top-0 left-0 w-[350px] h-[220px] rounded-2xl overflow-hidden pointer-events-none z-50 bg-neutral-100 border border-neutral-200/50"
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={activeImage}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DesignWorks;
