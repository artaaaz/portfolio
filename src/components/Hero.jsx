import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-between">
      {/* TOP LEFT - Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-8 px-8 md:pt-12 md:px-12 lg:pt-16 lg:px-16 z-10 flex flex-col items-start"
      >
        {/* Logo/Globe Icon */}
        <div className="w-8 h-8 mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        </div>

        <p className="text-xs text-gray-500 mb-1">09 Jan, 2026</p>
        <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Social Media</h3>
        <p className="text-xs text-gray-600">By: Erlangga Artha</p>
      </motion.div>

      {/* CENTER - Portfolio Text */}
      <div className="flex-1 flex items-center justify-center py-6 select-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17vw] md:text-[20vw] lg:text-[25vw] font-black text-[#1a1a1a] leading-none tracking-tighter"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Portfolio
        </motion.h1>
      </div>

      {/* BOTTOM ROW */}
      <div className="px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Left - Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 max-w-xl"
          >
            <span className="text-xs md:text-sm font-medium text-[#1a1a1a]">
              Frontend Web Development and UI/UX Design
            </span>
            <span className="text-xs md:text-sm text-gray-400">/</span>
            <span className="text-xs md:text-sm font-medium text-[#1a1a1a]">
              Brand Designer
            </span>
            <span className="text-xs md:text-sm text-gray-400">/</span>
            <span className="text-xs md:text-sm font-medium text-[#1a1a1a]">
              Tech Entusiast
            </span>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 md:gap-8 text-left w-full md:w-auto"
          >
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a
                href="mailto:erlangga.arthaa@gmail.com"
                className="hover:text-[#831514] transition-colors text-sm"
              >
                erlangga.arthaa@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <a
                href="tel:+6288293657753"
                className="hover:text-[#831514] transition-colors text-sm"
              >
                088293657753
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Location</p>
              <span className="text-sm">Bogor, West Java</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;