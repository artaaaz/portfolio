import React from 'react';
import { motion } from 'framer-motion';

const BrandGuidelines = ({ containerWidth = "max-w-10xl" }) => {
  return (
    <section 
      // BG Hitam Solid sesuai guideline #0a0a00
      className="relative w-full min-h-screen bg-[#0a0a00] py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* Container Gambar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`w-full ${containerWidth} mx-auto px-6 relative group`}
      >
        {/* Glow Effect dibalik gambar (muncul saat hover) */}
        <div className="absolute inset-0 bg-[#FFE600]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-full"></div>
        
        {/* Gambar Utama */}
        <img
          src="/image/a.png" 
          alt="Mention Brand Guidelines"
          className="w-full h-auto object-contain "
        />
      </motion.div>

    </section>
  );
};

export default BrandGuidelines;