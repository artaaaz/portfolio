import React from 'react';
import { motion } from 'framer-motion';

const Inside = () => {
  // Data list yang disesuaikan agar to-the-point dan berbobot
  const items = [
    { num: '1', title: 'UI/UX Case ' },
    { num: '2', title: 'Editorial & Graphics' },
    { num: '3', title: 'Digital Branding' },
    { num: '4', title: 'Web Implementation' },
  ];

  return (
    <section id="inside" className="relative w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col justify-between">
      
      {/* === TOP INFO BAR === */}
      <div className="w-full">
        <div className="flex justify-between items-start text-sm text-gray-600 font-['Inter'] mb-12 md:mb-16">
          <span>Creative Presentation</span>
          <span>09 Jan, 2026</span>
        </div>
      </div>

      {/* === MAIN CONTENT HOLDER === */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-auto">
        
        {/* LEFT SIDE: Big Bold Title */}
        <div className="lg:col-span-5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.9] tracking-tight font-['Inter']"
          >
            What you
            <br />
            will find
            <br />
            inside?
          </motion.h2>
        </div>

        {/* RIGHT SIDE: Staggered Numbered List */}
        <div className="lg:col-span-7 w-full flex flex-col pt-4 lg:pt-16 font-['Inter']">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full flex flex-col"
            >
              {/* Row Content */}
              <div className="flex justify-between items-end pb-3 pt-6 w-full text-[#1a1a1a]">
                {/* Number */}
                <span className="text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {item.num}
                </span>
                {/* Title */}
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-right transition-colors duration-300 group-hover:text-gray-500">
                  {item.title}
                </span>
              </div>
              
              {/* Divider Line (Matching image_7bebdd.png) */}
              <div className="w-full h-[2px] bg-[#1a1a1a] origin-left scale-x-100 transition-transform duration-300 group-hover:bg-gray-400" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom spacer block */}
      <div className="w-full hidden md:block"></div>
    </section>
  );
};

export default Inside;