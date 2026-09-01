import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const designProjects = [
  {
    id: "01",
    date: "Nov 2025",
    title: "Sistem penerimaan Murid Baru",
    category: "Frontend Web & UI/UX",
    image: "/image/user.png",
    tools: "Figma, React, VS Code",
    github: "https://github.com/Finnn-45/front-end-ppdb.git",
    description:
      "Mengembangkan platform web sistem penerimaan murid baru digital yang dirancang untuk mempermudah alur pendaftaran, seleksi, hingga pengumuman calon siswa secara efisien.",
  },

  {
    id: "02",
    date: "Aug 2025",
    title: "Sistem CRUD Data Sensor",
    category: "Full Stack Web Development",
    image: "",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/sistem-crud-sensor-suhu.git",

    description:
      "XINNA is a mobile application design focused on user wellness, featuring a clean brutalist layout, high contrast navigation, and intuitive interactive elements.",
  },

  {
    id: "03",
    date: "June 2026",
    title: "Sistem Catering Online",
    category: "Full-Stack Web Development",
    image: "",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/catering-kali-ini-serius.git",
    description:
      "New Student Admission System for school admission management. Built a comprehensive design system, responsive UI/UX, and high-converting branding assets.",
  },

  {
    id: "04",
    date: "June 2026",
    title: "IoT Dashboard",
    category: "Full Stack Web Development",
    image: "",
    tools: "Laravel, MySQL, VS Code",
    description:
      "Official landing page and database web platform for SMK TI BAZMA school, streamlining information access for students, parents, and administrative staff.",
  },

  {
    id: "05",
    date: "June 2026",
    title: "Airline system",
    category: "Full-Stack Web Development",
    image: "/image/doni.png",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/maskapai.git",
    description:
      "Robust visual content direction and monthly social media branding kit for Roboost, boosting engagement with custom editorial and brutalist graphics.",
  },

  {
    id: "06",
    date: "Aug 2026",
    title: "BMPS Bogor Website June 2026",
    category: "UI/UX & Frontend Web",
    image: "/image/BMPS ANJ.png",
    tools: "Figma, Next JS, VS Code",
    github: "https://github.com/rifkyfbrn07/BMPS-bogor.git",
    description:
      "Perancangan UI aplikasi Mention untuk kebutuhan branding, loyalty, dan pengalaman pengguna dalam satu platform.",
  },

  {
    id: "07",
    date: "Aug 2026",
    title: "Wedding Invitation Website June 2026",
    category: "Frontend Web Develop",
    image: "/image/we.jpeg",
    tools: "Laravel, VS Code, MySQL",
    github: "https://github.com/rifkyfbrn07/wedding_web.git",
    description:
      "Creative publication materials, X-banners, posters, and printed media designs for the Himpana national working meeting and conference event.",
  },
];

const DesignWorks = () => {
  const containerRef = useRef(null);
  const previewRef = useRef(null);

  // Image yang sedang aktif berdasarkan project yang di-hover
  const [activeImage, setActiveImage] = useState(
    designProjects[0]?.image || ""
  );

  const [selectedProject, setSelectedProject] = useState(null);

  // GSAP quickTo untuk cursor tracking
  const xTo = useRef(null);
  const yTo = useRef(null);

  // Menyimpan status apakah preview sedang aktif
  const previewVisible = useRef(false);

  useEffect(() => {
    // =====================================================
    // PRELOAD HANYA IMAGE YANG MEMANG ADA
    // =====================================================

    designProjects.forEach((project) => {
      if (!project.image) return;

      const img = new Image();
      img.src = project.image;
    });

    // =====================================================
    // INITIALIZE FLOATING PREVIEW
    // =====================================================

    if (previewRef.current) {
      gsap.set(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        xPercent: 5,
        yPercent: 5,
      });

      xTo.current = gsap.quickTo(previewRef.current, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      yTo.current = gsap.quickTo(previewRef.current, "y", {
        duration: 0.35,
        ease: "power3.out",
      });
    }
  }, []);

  // =====================================================
  // CURSOR MOVE
  // =====================================================

  const handleMouseMove = (e) => {
    if (!xTo.current || !yTo.current) return;

    xTo.current(e.clientX + 25);
    yTo.current(e.clientY + 25);
  };

  // =====================================================
  // MOUSE ENTER PROJECT
  // =====================================================

  const handleProjectMouseEnter = (project) => {
    // Set image berdasarkan project yang sedang di-hover
    setActiveImage(project.image || "");

    // ===================================================
    // KALAU PROJECT TIDAK PUNYA IMAGE
    // PREVIEW JANGAN DITAMPILKAN
    // ===================================================

    if (!project.image) {
      previewVisible.current = false;

      if (previewRef.current) {
        gsap.to(previewRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      return;
    }

    // ===================================================
    // KALAU PROJECT PUNYA IMAGE
    // TAMPILKAN PREVIEW
    // ===================================================

    previewVisible.current = true;

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // =====================================================
  // MOUSE LEAVE SECTION
  // =====================================================

  const handleMouseLeaveSection = () => {
    previewVisible.current = false;

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section
        ref={containerRef}
        className="relative w-full bg-white border-t border-neutral-100 py-16 md:py-24 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveSection}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mb-12 md:mb-16 font-sans">
             <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase select-none">
                Kumpulan Karya
              </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed select-none font-light">
              Kumpulan proyek yang saya kembangkan dari kebutuhan nyata, mulai
              dari perancangan hingga implementasi solusi yang fungsional,
              interaktif, dan berdampak.
            </p>
          </div>

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          <div className="w-full flex flex-col border-t border-neutral-200 font-sans">

            {designProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => handleProjectMouseEnter(project)}
                className="
                  group
                  relative
                  w-full
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  justify-between
                  py-6
                  md:py-10
                  border-b
                  border-neutral-200
                  cursor-pointer
                  select-none
                  px-2
                  transition-all
                  duration-300
                  hover:bg-neutral-50
                "
              >

                {/* =========================================
                    LEFT: DATE + TITLE
                ========================================= */}

                <div className="flex flex-row items-center gap-6 md:gap-12 lg:gap-24 flex-grow">

                  {/* DATE */}

                  <span
                    className="
                      text-xs
                      md:text-sm
                      font-mono
                      text-neutral-400
                      group-hover:text-[#2147ff]
                      transition-colors
                      duration-300
                      min-w-[75px]
                      md:min-w-[100px]
                    "
                  >
                    {project.date}
                  </span>

                  {/* TITLE */}

                  <div className="flex flex-col md:flex-row md:items-baseline gap-2">

                    <h3
                      className="
                        text-2xl
                        md:text-5xl
                        lg:text-6xl
                        font-black
                        text-[#1a1a1a]
                        tracking-tighter
                        uppercase
                        transition-all
                        duration-300
                        group-hover:text-[#2147ff]
                        group-hover:translate-x-3
                      "
                    >
                      {project.title}
                    </h3>

                    {/* ACHIEVEMENT */}

                    {project.achievement && (
                      <span
                        className="
                          text-[10px]
                          font-mono
                          font-bold
                          text-[#2147ff]
                          border
                          border-[#2147ff]/20
                          bg-[#2147ff]/5
                          px-2
                          py-0.5
                          rounded
                          uppercase
                          tracking-wider
                          md:ml-4
                          select-none
                          inline-block
                        "
                      >
                        🏆 {project.achievement}
                      </span>
                    )}

                  </div>
                </div>

                {/* =========================================
                    RIGHT: CATEGORY + ARROW
                ========================================= */}

                <div
                  className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    md:justify-end
                    gap-6
                    md:gap-16
                    mt-3
                    md:mt-0
                  "
                >

                  {/* CATEGORY */}

                  <span
                    className="
                      text-xs
                      md:text-sm
                      font-mono
                      tracking-widest
                      text-neutral-400
                      uppercase
                      transition-colors
                      duration-300
                      group-hover:text-[#2147ff]
                    "
                  >
                    {project.category}
                  </span>

                  {/* ARROW */}

                  <span
                    className="
                      text-base
                      md:text-4xl
                      font-light
                      text-neutral-400
                      transition-all
                      duration-300
                      group-hover:text-[#2147ff]
                      group-hover:translate-x-2
                      group-hover:-translate-y-2
                    "
                  >
                    ↗
                  </span>

                </div>

                {/* =========================================
                    MOBILE PREVIEW
                    HANYA MUNCUL KALAU ADA IMAGE
                ========================================= */}

                {project.image && (
                  <div
                    className="
                      block
                      md:hidden
                      mt-4
                      w-full
                      aspect-[16/10]
                      rounded-xl
                      overflow-hidden
                      border
                      border-neutral-100
                      bg-neutral-50
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* =================================================
            DESKTOP FLOATING PREVIEW
        ================================================= */}

        <div
          ref={previewRef}
          className="
            hidden
            md:block
            fixed
            top-0
            left-0
            w-[350px]
            h-[220px]
            rounded-2xl
            overflow-hidden
            pointer-events-none
            z-50
            bg-neutral-100
            border
            border-neutral-200/50
          "
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          }}
        >
          {/* =================================================
              IMAGE HANYA DIRENDER KALAU ADA
          ================================================= */}

          {activeImage && (
            <img
              src={activeImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      {/* =====================================================
          CASE STUDY DETAIL MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DesignWorks;