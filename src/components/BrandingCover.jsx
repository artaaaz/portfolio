    import React from 'react';
import { motion } from 'framer-motion';

const BrandingCover = () => {
  return (
    <section id="branding-cover" className="relative w-full min-h-screen bg-black text-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between overflow-hidden">
      
      {/* === TOP INFO BAR (Inverted to White/Gray) === */}
      <div className="w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-start text-sm text-gray-400 font-['Inter']"
        >
          <span>Creative Presentation</span>
          <span>09 Jan, 2026</span>
        </motion.div>
      </div>

      {/* === MIDDLE RIGHT: Editorial Signature Arrow === */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ x: 12 }}
          className="cursor-pointer"
        >
          {/* SVG Arrow Custom yang presisi mengikuti lengkungan di image_7b8d89.png */}
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
          >
            <path 
              d="M5 50H95M95 50C80 45 70 30 70 15M95 50C80 55 70 70 70 85" 
              stroke="white" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* === BOTTOM LEFT: Massive Title === */}
      <div className="w-full mt-auto pt-12 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black tracking-tighter leading-[0.85] font-['Inter'] text-left select-none"
        >
          UI/UX Design.
        </motion.h1>
      </div>

    </section>
  );
};

export default BrandingCover;