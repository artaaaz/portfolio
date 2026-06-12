import React from 'react';
import { motion } from 'framer-motion';

const AwardsSection = () => {
  const images = ["/image/gelo2.png", "/image/gelo.png", "/image/gelo1.png"];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a00] px-8 py-20 overflow-hidden">
      
      {/* 1. RUNNING TEXT SILANG ATAS - PASTI JALAN! */}
      <div className="absolute top-[20%] -left-[10%] rotate-[-5deg] w-[120%] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-7xl font-black text-[#FFE600]/30 uppercase tracking-tighter mx-8">
              WeAreMENTIONWeComeToWWin
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="aspect-[3/4] bg-zinc-900 border border-white/10"
            >
              <img 
                src={src} 
                alt={`Award ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. RUNNING TEXT SILANG BAWAH - PASTI JALAN! */}
      <div className="absolute bottom-[20%] -left-[10%] rotate-[5deg] w-[120%] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ["-20%", "0%"] }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-7xl font-black text-[#FFE600]/30 uppercase tracking-tighter mx-8">
              WeAreMENTIONWeComeToWWin
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default AwardsSection;