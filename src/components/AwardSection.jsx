import React from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame } from 'framer-motion';

// Komponen Velocity Row untuk running text
const ScrollVelocityRow = ({ children, baseVelocity = 2, direction = 1 }) => {
  const baseX = React.useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  useAnimationFrame((t, delta) => {
    let moveBy = direction * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) direction = -1;
    else if (velocityFactor.get() > 0) direction = 1;
    moveBy += moveBy * velocityFactor.get();
    baseX.current += moveBy;
  });

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div style={{ x: useTransform(() => `${baseX.current % -50}%`) }} className="flex gap-10">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-3xl md:text-6xl font-black text-[#FFE600]/30 uppercase tracking-tighter">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const AwardsSection = () => {
  const images = ["/image/gelo2.png", "/image/gelo.png", "/image/gelo1.png"];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a00] px-8 py-20 overflow-hidden">
      
      {/* 1. RUNNING TEXT SILANG ATAS */}
      <div className="absolute top-[20%] -left-10 rotate-[-5deg] w-[120%] pointer-events-none">
        <ScrollVelocityRow baseVelocity={2} direction={1}>
          EMBRACING CHALLENGES // CRAFTING IDEAS // BUILDING FUTURE //
        </ScrollVelocityRow>
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

      {/* 2. RUNNING TEXT SILANG BAWAH */}
      <div className="absolute bottom-[20%] -left-10 rotate-[5deg] w-[120%] pointer-events-none">
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          TURNING CURIOSITY INTO DIGITAL EXPERIENCES // MENTION APPS // WINNER //
        </ScrollVelocityRow>
      </div>
    </section>
  );
};

export default AwardsSection;