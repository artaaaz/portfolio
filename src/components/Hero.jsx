import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* TOP LEFT - Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16"
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
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[30vw] md:text-[20vw] lg:text-[25vw] font-black text-[#1a1a1a] leading-none tracking-tighter"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Portfolio
        </motion.h1>
      </div>

      {/* BOTTOM ROW */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Left - Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
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
            className="flex flex-wrap gap-6 md:gap-8"
          >
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a
                href="mailto:erlangga.arthaa@gmail.com"
                className="hover:text-[#831514] transition-colors"
              >
                erlangga.arthaa@gmail.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <a
                href="tel:+6288293657753"
                className="hover:text-[#831514] transition-colors"
              >
                088293657753
              </a>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Location</p>
              <span>Bogor, West Java</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
