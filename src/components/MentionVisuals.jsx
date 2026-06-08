import React from 'react';

const MentionVisuals = () => {
  return (
    <section 
      className="relative w-screen h-screen flex items-center justify-center m-0 p-0 overflow-hidden select-none"
      style={{
        // Gradient dari hijau tua/gelap ke kuning terang khas mockup
        background: 'radial-gradient(circle at 80% 20%, #FFF000 0%, #000 60%, #1E2200 100%)',
      }}
    >
      {/* === EFEK NOISE / GRAIN (OPSIONAL) === */}
      {/* Menggunakan overlay opacity kecil untuk meniru tekstur kertas/grain di gambar */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* === KONTEN UTAMA: LOGO MENTION === */}
      <div className="relative z-10 flex items-center justify-center px-6 w-full max-w-4xl">
        <img 
          src="/image/mention.png" // <--- Ganti dengan path file logo kamu (bisa .png atau .svg)
          alt="Mention Logo" 
          className="w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%] h-auto object-contain drop-shadow-lg animate-fade-in"
        />
      </div>

    </section>
  );
};

export default MentionVisuals;