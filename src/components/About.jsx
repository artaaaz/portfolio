import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      {/* MAIN CONTENT - Full Width Layout */}
      <div className="max-w-[1800px] mx-auto">
        {/* TOP - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          {/* LEFT - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/image/artha.png"
                alt="Erlangga Artha"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x750/e5e5e5/666?text=Your+Photo";
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pt-8"
          >
            {/* Hello! - Bold dengan tracking tight */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.95] mb-2 font-['Inter'] tracking-tight">
              Hello!
            </h1>

            {/* I'm Erlangga Artha - Font Normal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#1a1a1a] leading-[0.95] mb-8 font-['Inter'] tracking-tight">
              I'm Erlangga Artha
            </h1>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-600 mb-6 font-['Inter'] leading-relaxed max-w-2xl">
              A multidisciplinary designer exploring the intersection of
              culture, emotion, and aesthetics.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-['Inter'] max-w-2xl">
              I explore the intersection of culture, emotion, and aesthetics to
              create visual systems that resonate. To me, design is more than
              just aesthetics; it's a tool to tell stories, navigate identities,
              and find the perfect balance between enduring values and constant
              change.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM - Contact Info (Full Width, 3 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full pt-12 border-t border-gray-200"
        >
          {/* ✅ TAMBAHIN GRID CLASS DI SINI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a
                href="mailto:erlangga.arthaa@gmail.com"
                className="hover:text-[#831514] transition-colors"
              >
                erlangga.arthaa@gmail.com
              </a>
            </div>

            {/* Phone - Center */}
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <a
                href="tel:+6288293657753"
                className="hover:text-[#831514] transition-colors"
              >
                088293657753
              </a>
            </div>

            {/* Location - Far Right */}
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Location</p>
              <span>Bogor, West Java</span>
            </div>
          </div>
        </motion.div> 
      </div>
    </section>
  );
};

export default About;
