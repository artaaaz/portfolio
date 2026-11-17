import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { lockScroll, unlockScroll } from "../../lib/smoothScroll";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
};

/** Ambil ID YouTube dari berbagai format URL (youtu.be, watch?v=, embed/, atau ID saja). */
export function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/** Modal video layar penuh. Bisa dipakai langsung (controlled) lewat `open` + `onClose`. */
export function VideoModal({ videoSrc, open, onClose, title = "Video player" }) {
  const youtubeId = getYouTubeId(videoSrc);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lockScroll(); // hentikan smooth scroll halaman
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      unlockScroll();
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            className="relative aspect-video w-full max-w-5xl"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-12 right-0 text-sm tracking-wide text-white/60 transition-colors hover:text-white"
            >
              Close [Esc]
            </button>

            {youtubeId ? (
              <iframe
                className="h-full w-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : videoSrc ? (
              <video className="h-full w-full rounded-lg shadow-2xl" controls autoPlay src={videoSrc}>
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-900 text-sm text-white/40">
                No video source provided.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function HeroVideoDialog({ className, videoSrc = "", thumbnailSrc, thumbnailAlt = "Video thumbnail", trigger, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {trigger ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={cn("block w-full text-left", className)}
          aria-label={title ? `Play video: ${title}` : "Play video"}
        >
          {trigger}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={cn("group relative block w-full overflow-hidden rounded-2xl", className)}
          aria-label={title ? `Play video: ${title}` : "Play video"}
        >
          {thumbnailSrc ? (
            <img src={thumbnailSrc} alt={thumbnailAlt} className="h-full w-full object-cover" />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-zinc-900">
              <p className="text-sm font-medium text-white/70">Preview</p>
            </div>
          )}
        </button>
      )}

      <VideoModal videoSrc={videoSrc} open={isOpen} onClose={() => setIsOpen(false)} title={title} />
    </>
  );
}
