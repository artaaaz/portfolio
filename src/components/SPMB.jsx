import React from 'react';
import { motion } from 'framer-motion';

const SPMB = () => {
  return (
    <>
      {/* === SECTION 1: THE MAKING OF MENTION (White Background) === */}
      <section className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-20 md:py-32">
        
        {/* Top Bar */}
        <div className="flex justify-between items-start mb-12 md:mb-16">
          <p className="text-xs md:text-sm text-gray-600 font-['Inter']">
            Creative Presentation
          </p>
          <p className="text-xs md:text-sm text-gray-600 font-['Inter']">
            09 Jan, 2026
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.95] tracking-tight mb-12 md:mb-16 font-['Inter']"
          >
            Key Impact at
            <br />
                SPMB
          </motion.h1>

          {/* Bullet Points - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start gap-8"
          >
            {/* Left - Empty */}
            <div className="flex-1"></div>

            {/* Right - Bullet Points */}
            <div className="flex-5 md:max-w-md">
              <ul className="space-y-1">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#1a1a1a] font-['Inter']">Comprehensive Design System & Visual Identity</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#1a1a1a] font-['Inter']">High-Converting Digital Branding Assets</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#1a1a1a] font-['Inter']">Digital Publication Layouts & Informational Graphics</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#1a1a1a] font-['Inter']">Campaign & Celebration Visual Marketing</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#1a1a1a] font-['Inter']">End-to-End Responsive UI/UX Design for Admission Portal</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default SPMB;