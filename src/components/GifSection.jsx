import React from 'react';

const GifSection = () => {
  return (
    <section 
      className="relative w-screen h-screen text-white font-sans flex select-none overflow-hidden p-8 md:p-16"
      style={{
        // Menggunakan hitam pekat/solid dengan sedikit nuansa charcoal premium
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* === EFEK NOISE / GRAIN === */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* === KIRI: INFORMASI UTAMA === */}
      <div className="w-1/2 flex flex-col justify-between h-full pr-8 relative z-10">
        {/* Atas */}
        <div>
          <p className="text-sm md:text-base font-normal tracking-wide opacity-60">
            Primary English Font
          </p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mt-2">
            Inter
          </h1>
        </div>

        {/* Bawah */}
        <div className="flex flex-col gap-6 max-w-md">
          {/* Garis Horizontal Atas Deskripsi */}
          <div className="w-full h-[2px] bg-white opacity-40"></div>
          
          <p className="text-xs md:text-sm font-semibold leading-relaxed opacity-60">
            2026
          </p>
          
          <p className="text-sm md:text-base font-medium leading-relaxed tracking-wide opacity-80">
            This versatile and free-for-commercial-use font lends a contemporary edge to the brand's visual communication, ensuring consistency and legibility across various platforms and materials.
          </p>

          {/* Garis Horizontal Bawah Deskripsi */}
          <div className="w-full h-[2px] bg-white opacity-40"></div>

          {/* Karakter Set */}
          <div className="text-xs md:text-sm font-bold tracking-widest leading-normal mt-2 break-all opacity-50">
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>0123456789</p>
            <p>!@#$%^&*()?</p>
          </div>
        </div>
      </div>

      {/* === KANAN: GRID LAYOUT UNTUK FONT WEIGHT === */}
      <div className="w-1/2 flex h-full relative border-l border-white/20 z-10">
        
        {/* Kolom 1: Thin */}
        <div className="flex-1 flex flex-col justify-between border-r border-white/20 h-full relative overflow-hidden pl-4 py-2">
          <span className="text-sm md:text-base font-thin opacity-50">Thin</span>
          <span className="text-[12rem] md:text-[24rem] font-thin absolute -bottom-16 -left-12 leading-none select-none pointer-events-none opacity-40">
            a
          </span>
        </div>

        {/* Kolom 2: Light */}
        <div className="flex-1 flex flex-col justify-between border-r border-white/20 h-full relative overflow-hidden pl-4 py-2">
          <span className="text-sm md:text-base font-light opacity-50">Light</span>
          <span className="text-[12rem] md:text-[24rem] font-light absolute -bottom-16 -left-12 leading-none select-none pointer-events-none opacity-60">
            a
          </span>
        </div>

        {/* Kolom 3: Regular */}
        <div className="flex-1 flex flex-col justify-between border-r border-white/20 h-full relative overflow-hidden pl-4 py-2">
          <span className="text-sm md:text-base font-normal opacity-60">Regular</span>
          <span className="text-[12rem] md:text-[24rem] font-normal absolute -bottom-16 -left-12 leading-none select-none pointer-events-none opacity-80">
            a
          </span>
        </div>

        {/* Kolom 4: Bold */}
        <div className="flex-1 flex flex-col justify-between h-full relative overflow-hidden pl-4 py-2">
          <span className="text-sm md:text-base font-bold">Bold</span>
          <span className="text-[16rem] md:text-[32rem] font-bold absolute -bottom-24 -left-16 leading-none z-10 select-none pointer-events-none">
            a
          </span>
        </div>

      </div>

    </section>
  );
};

export default GifSection;