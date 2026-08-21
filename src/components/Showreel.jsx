import React from "react";
import { motion } from "framer-motion";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

const reelUrl = "https://youtu.be/2K3CYhc-ILQ?si=mCCnsWennNimFATx";

const Showreel = () => {
  return (
    <section className="relative w-full bg-[#163ce0] py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-center">
        <div className="relative inline-flex">
          {/* Decorative GIF — Left */}
          <img
            src="/videos/gif.gif"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 md:w-[300px] lg:w-[380px] xl:w-[450px] 2xl:w-[500px]"
            style={{ right: "calc(100% + 24px)" }}
          />

          {/* Decorative GIF — Right */}
          <img
            src="/videos/gif.gif"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 md:w-[300px] lg:w-[380px] xl:w-[450px] 2xl:w-[500px]"
            style={{ left: "calc(100% + 24px)" }}
          />

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[700px] md:max-w-[850px]"
          >
            <HeroVideoDialog
              videoSrc={reelUrl}
              trigger={
                <div className="relative w-full aspect-video rounded-3xl md:rounded-[32px] overflow-hidden cursor-pointer group shadow-2xl shadow-black/40">
                  {/* Thumbnail */}
                  <img
                    src="/image/tak.png"
                    alt="Mention project video cover"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 shadow-lg shadow-black/20">
                      <svg
                        className="w-6 h-6 md:w-7 md:h-7 text-white ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;