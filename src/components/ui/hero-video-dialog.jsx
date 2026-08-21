"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
};

/**
 * Extracts a YouTube video ID from various URL formats.
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  }
  return null;
}

function isYouTubeUrl(url) {
  return (
    url?.includes("youtube.com") ||
    url?.includes("youtu.be") ||
    getYouTubeEmbedUrl(url) !== null
  );
}

export function HeroVideoDialog({
  className,
  videoSrc = "",
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  trigger,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoSrc);
  const isYouTube = isYouTubeUrl(videoSrc);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <>
      {/* Trigger */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)} className={className}>
          {trigger}
        </div>
      ) : (
        <div className={cn("relative cursor-pointer group", className)}>
          <div
            onClick={() => setIsOpen(true)}
            className="relative overflow-hidden rounded-2xl"
          >
            {thumbnailSrc ? (
              <img
                src={thumbnailSrc}
                alt={thumbnailAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full aspect-video bg-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
                    <svg
                      className="w-8 h-8 text-white ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm font-medium">Preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                className="absolute -top-12 right-0 text-white/60 hover:text-white text-sm tracking-wide transition-colors"
              >
                Close [Esc]
              </button>

              {/* Video / YouTube embed */}
              {isYouTube && youtubeEmbedUrl ? (
                <iframe
                  className="w-full h-full rounded-lg shadow-2xl"
                  src={youtubeEmbedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : videoSrc ? (
                <video
                  className="w-full h-full rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  src={videoSrc}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full rounded-lg bg-zinc-900 flex items-center justify-center text-white/40 text-sm">
                  No video source provided.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}