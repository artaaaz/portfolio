import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  // =====================================================
  // LOCK BODY SCROLL SAAT MODAL TERBUKA
  // =====================================================

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  // =====================================================
  // CLOSE DENGAN ESC
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* =================================================
          MODAL CONTAINER
      ================================================= */}

      <motion.div
        className="
          relative
          w-full
          max-w-6xl
          max-h-[92vh]
          overflow-y-auto
          bg-white
          rounded-[24px]
          shadow-2xl
          scrollbar-thin
          scrollbar-thumb-neutral-400
          scrollbar-track-transparent
        "
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="
            absolute
            top-6
            right-6
            z-20
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-full
            bg-white
            border
            border-neutral-200
            text-neutral-900
            text-2xl
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            hover:border-black
          "
        >
          ×
        </button>

        {/* =================================================
            PROJECT IMAGE
            HANYA MUNCUL KALAU IMAGE ADA
        ================================================= */}

        {project.image && (
          <div
            className="
              w-full
              aspect-[16/8]
              bg-neutral-100
              overflow-hidden
              rounded-t-[24px]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-full
                object-cover
                block
              "
            />
          </div>
        )}

        {/* =================================================
            PROJECT CONTENT
        ================================================= */}

        <div
          className={`
            w-full
            px-6
            md:px-10
            lg:px-14
            py-8
            md:py-10
            ${project.image ? "" : "pt-20 md:pt-20"}
          `}
        >
          {/* =================================================
              TOP META
          ================================================= */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* DATE */}

            <span
              className="
                font-mono
                text-xs
                md:text-sm
                uppercase
                tracking-widest
                text-neutral-400
              "
            >
              {project.date || project.year}
            </span>

            {/* CATEGORY */}

            <span
              className="
                inline-flex
                w-fit
                font-mono
                text-[10px]
                md:text-xs
                uppercase
                tracking-widest
                text-[#2147ff]
                border
                border-[#2147ff]/20
                bg-[#2147ff]/5
                px-3
                py-2
              "
            >
              {project.category}
            </span>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              uppercase
              tracking-tighter
              leading-[0.9]
              text-[#1a1a1a]
              max-w-5xl
              mb-8
            "
          >
            {project.title}
          </h2>

          {/* =================================================
              DESCRIPTION / INTRO
          ================================================= */}

          {project.description && (
            <div className="max-w-3xl mb-10">
              <p
                className="
                  text-base
                  md:text-lg
                  leading-relaxed
                  text-neutral-600
                  font-normal
                "
              >
                {project.description}
              </p>
            </div>
          )}

          {/* =================================================
              PROJECT INFO
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              border-t
              border-neutral-200
              pt-8
            "
          >
            {/* TOOLS */}

            {project.tools && (
              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-neutral-400
                    mb-3
                  "
                >
                  Tools / Stack
                </p>

                <p
                  className="
                    text-sm
                    md:text-base
                    font-medium
                    text-neutral-900
                  "
                >
                  {Array.isArray(project.tools)
                    ? project.tools.join(" • ")
                    : project.tools}
                </p>
              </div>
            )}

            {/* CATEGORY */}

            {project.category && (
              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-neutral-400
                    mb-3
                  "
                >
                  Category
                </p>

                <p
                  className="
                    text-sm
                    md:text-base
                    font-medium
                    text-neutral-900
                  "
                >
                  {project.category}
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              CASE STUDY DEEP-DIVE (OVERVIEW, CHALLENGE, PROCESS, SOLUTION, RESULT)
          ================================================= */}

          {(project.overview ||
            project.challenge ||
            project.process ||
            project.solution ||
            project.result) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-200 pt-8 mt-8">
              {project.overview && (
                <div className="md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#2147ff] font-semibold mb-2">
                    01 / Overview
                  </p>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#2147ff] font-semibold mb-2">
                    02 / Challenge
                  </p>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.process && (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#2147ff] font-semibold mb-2">
                    03 / Process
                  </p>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                    {project.process}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#2147ff] font-semibold mb-2">
                    04 / Solution
                  </p>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.result && (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#2147ff] font-semibold mb-2">
                    05 / Result
                  </p>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                    {project.result}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* =================================================
              GITHUB / PROJECT LINK
          ================================================= */}

          {project.github && (
            <div className="mt-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  bg-[#1a1a1a]
                  text-white
                  font-mono
                  text-xs
                  uppercase
                  tracking-widest
                  transition-all
                  duration-300
                  hover:bg-[#2147ff]
                "
                onClick={(event) => event.stopPropagation()}
              >
                View Project
                <span className="text-lg">↗</span>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;