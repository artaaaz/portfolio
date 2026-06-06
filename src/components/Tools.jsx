import React from 'react';
import { motion } from 'framer-motion';

const Tools = () => {
  return (
    <section id="tools" className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between">
      
      {/* === TOP INFO BAR === */}
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start text-sm text-gray-600 font-['Inter'] mb-12 md:mb-20"
        >
          <span>Creative Presentation</span>
          <span>09 Jan, 2026</span>
        </motion.div>
      </div>

      {/* === MAIN CONTENT HOLDER === */}
      <div className="w-full flex-1 flex flex-col justify-center gap-12 md:gap-16 mb-16">
        
        {/* HEADING: Tools I'm fluent in. */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-[#1a1a1a] leading-[0.9] tracking-tight font-['Inter']"
          >
            Tools
            <br />
            I'm fluent in.
          </motion.h2>
        </div>

        {/* DESCRIPTION / BODY TEXT */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-['Inter']"
          >
            <strong className="font-bold text-[#1a1a1a]">
              
            </strong>{' '}
            I use tools like <strong className="font-bold text-[#1a1a1a]">
                Visual Studio Code, Figma, Adobe Photoshop, Illustrator, Affinity, Canva, and CapCut. </strong>{' '}
              These tools help me <strong className="font-bold text-[#1a1a1a]">build web interfaces, create graphic designs, and edit videos.</strong>{' '}
          </motion.p>
        </div>

      </div>

      {/* Dummy empty div to keep the flex justify-between layout stable on the bottom edge */}
      <div className="w-full hidden md:block"></div>

    </section>
  );
};

export default Tools;