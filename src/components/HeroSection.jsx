import React from "react";
import { HeroVideoDialog } from "./ui/hero-video-dialog";



const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full">
              <span className="text-xs tracking-widest uppercase text-white/50">
                Portfolio 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
              design &
              <br />
              <span className="text-brand-blue">code</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 max-w-md leading-relaxed">
              Crafting digital experiences through minimalist design and clean code.
            </p>

          </div>

          {/* Right: Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-3xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-white/5 select-none">
                    A
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="w-16 h-0.5 bg-brand-blue mx-auto" />
                    <p className="text-xs text-white/30 tracking-[0.3em] uppercase">
                      Artha Az
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;