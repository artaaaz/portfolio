import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between">
      
      {/* === TOP INFO BAR & SUB-HEADER === */}
      <div className="w-full flex flex-col gap-4 mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start text-sm text-gray-600 font-['Inter']"
        >
          <span>Creative Presentation</span>
          <span>09 Jan, 2026</span>
        </motion.div>
      </div>

      {/* === MAIN HEADING === */}
      <div className="w-full mb-6">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight font-['Inter'] mb-8"
        >
          What I do?
          <br />
          (and love doing)
        </motion.h2>
      </div>

      {/* === DESCRIPTION === */}
      <div className="w-full mb-16 md:mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl font-['Inter']"
        >
          I combine frontend web and graphic design. I build responsive user interfaces and creative visual layouts. 
          My focus is simple: clean code, bold graphics, and functional digital experiences.
        </motion.p>
      </div>

      {/* === SERVICES - PERFECT EDGE-TO-EDGE STAGGERED LAYOUT === */}
      {/* Memakai w-full tanpa batasan max-w kaku agar otomatis melebar mengikuti padding halaman */}
      <div className="w-full font-['Inter'] flex flex-col gap-y-8 md:gap-y-14 mb-12">
        
        {/* ROW 1: 4 Items (Mentok Kiri & Mentok Kanan) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 w-full"
        >
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">UI/UX Design</p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Prototyping</p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Frontend Web</p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Video Editing</p>
        </motion.div>

        {/* ROW 2: 3 Items (Otomatis Mengunci di Sela-Sela Baris Atas) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-0 w-full"
        >
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Social Media Specialist</p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Graphic Design</p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">Photo Manipulation</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;