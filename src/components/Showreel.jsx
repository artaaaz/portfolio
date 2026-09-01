import React from "react";
import { motion } from "framer-motion";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

const videoData = {
  id: "01",
  title: "LEPAS JUANG #2",
  videoSrc: "https://youtu.be/2K3CYhc-ILQ?si=mCCnsWennNimFATx",
  thumbnail: "/image/tak.png",
  story: [
    "A short visual story about the final moments of our journey together. The video captures the atmosphere, laughter, memories, and emotions that came with saying goodbye.",
    "The intention was simple — to preserve the small, fleeting moments that would eventually become lasting memories.",
  ],
};

const Showreel = () => {
  return (
    <section
      id="showreel"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="border-b border-neutral-200 pb-10 md:pb-14 mb-12 md:mb-16">
          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >


          </motion.div>

          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase select-none"
          >
          </motion.h2>
        </div>

        {/* =================================================
            TWO-COLUMN LAYOUT: VIDEO (LEFT) + STORY (RIGHT)
        ================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Video Player (Main Visual Focus) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 w-full"
          >
            <HeroVideoDialog
              videoSrc={videoData.videoSrc}
              trigger={
                <div className="group relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 cursor-pointer transition-all duration-500 hover:border-neutral-400 hover:shadow-xl">
                  {/* Thumbnail Cover */}
                  <img
                    src={videoData.thumbnail}
                    alt={`${videoData.title} - Video Cover`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Dark subtle overlay */}
                  <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/35" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] shadow-lg transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#2147ff] group-hover:text-white">
                      <svg
                        className="w-6 h-6 md:w-7 md:h-7 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Video Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded">
                      Watch Story
                    </span>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded">
                      ↗
                    </span>
                  </div>
                </div>
              }
            />
          </motion.div>

          {/* RIGHT: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center font-sans"
          >
            {/* Story Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#2147ff] font-semibold">
                {videoData.tag}
              </span>
              <span className="w-8 h-px bg-neutral-300" />
            </div>

            {/* Video Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-tight mb-6">
              {videoData.title}
            </h3>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 mb-6" />

            {/* Story Paragraphs */}
            <div className="flex flex-col gap-4 text-base md:text-lg text-neutral-600 leading-relaxed font-normal">
              {videoData.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;