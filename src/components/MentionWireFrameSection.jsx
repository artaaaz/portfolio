import React from 'react';
import { motion } from 'framer-motion';

const MentionWireframeSection = () => {
  // === Daftar Gambar Presentasi (Urutan Narasi) ===
  const mentionImages = [
    { id: 1, src: '/image/1.png', alt: 'Mention UI/UX Design Intro' },
    { id: 2, src: '/image/2.png', alt: 'Mention Narrative Points' },
    { id: 3, src: '/image/3.png', alt: 'Mention Logo Identity Slide' },
    { id: 4, src: '/image/4.png', alt: 'Inter Font Specifications' },
  ];

  return (
    <section 
      style={{
        background: 'radial-gradient(circle at 80% 20%, #FFF000 0%, #000 60%, #1E2200 100%)',
      }}
      // 🔥 GEDEIN MAKSIMAL DI SINI (Langkah 1): 
      // Ubah px-4 md:px-6 kemarin jadi px-2 md:px-4 biar jarak kosong di ujung paling kanan-kiri layar bener-bener tipis!
      className="relative w-full px-2 md:px-4 py-24 min-h-screen flex flex-col justify-center items-center overflow-hidden font-['Inter'] selection:bg-[#fffb00] selection:text-black"
    >
      {/* Ambient Glow Subtle di Background */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#deff9a]/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />


      {/* 🔥🔥🔥 GEDEIN MAKSIMAL DI SINI (Langkah 2 - KUNCINYA) 🔥🔥🔥 */}
      {/* Ganti 'max-w-7xl' kemarin menjadi 'max-w-[92vw]' atau 'max-w-full px-4'. 
          Ini bakal maksa barisan 4 kolom lu melebar hampir mentok ke ujung layar monitor! */}
      <motion.div 
        className="w-full max-w-[92vw] xl:max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 z-10 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {mentionImages.map((image) => (
          <motion.div
            key={image.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="group relative w-full"
          >
            {/* Image Wrapper */}
            <div className="w-full h-auto rounded-xl overflow-hidden transition-all duration-500">
              <img 
                src={image.src} 
                alt={image.alt} 
                // w-full pastiin gambar selalu ngisi 100% ruang kotak grid-nya yang udah melar tadi
                className="w-full h-auto object-contain select-none block" 
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MentionWireframeSection;