import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  // 🎛️ KONTROL POSISI TEKS "THROUGH..."
  const descPosition = {
    top: "auto",
    right: "38%",
    bottom: "2%",
    left: "auto",
  };

  // 🎛️ KONTROL POSISI LABEL "MENTION APPS | EST.2026"
  const labelPosition = {
    top: "17%",        // Geser dari ATAS (contoh: "0", "50px", "5%")
    right: "84%",      // Geser dari KANAN (contoh: "0", "100px", "10%")
    bottom: "20%",
    left: "auto",
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a00 0%, #2d2d00 40%, #FFE600 100%)",
      }}
    >
      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20 md:py-32">
        
        {/* === TOP LABEL (DENGAN POSISI BEBAS) === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute text-xs md:text-sm font-medium text-white tracking-wider"
          style={{ 
            fontFamily: "Inter, sans-serif",
            ...labelPosition // 👈 POSISI LABEL DIATUR DI SINI
          }}
        >
          MENTION APPS | EST.2026
        </motion.p>

        {/* === HEADLINE + DESKRIPSI === */}
        <div className="relative mb-16 md:mb-24 pt-16"> {/* pt-16 biar gak ketutupan label */}
          
          {/* Headline Besar - FIX: max-w-none biar "THAT" gak turun */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight max-w-none"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WE CONCLUDED THAT
            <br />
            A GREAT UI IS ONLY
            <br />
            THE SURFACE.
          </motion.h1>

          {/* TEKS DESKRIPSI (POSISI BEBAS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute max-w-sm"
            style={descPosition}
          >
            <p
              className="text-xs md:text-sm text-white/80 leading-relaxed font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Through our experience in developing Mention Apps, we researched
              more deeply how users interact smoothly using mention apps.
            </p>
          </motion.div>

        </div>

        {/* === GARIS PEMISAH === */}
        <div className="w-full h-[1px] bg-white/20 mb-16 md:mb-24"></div>

        {/* === NUMBERED FEATURES === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {[
            {
              number: "01",
              title: "REAL-TIME TRACKING",
              description: "Seamlessly monitor your operational data, incoming assets, or team workflows with zero processing delay.",
            },
            {
              number: "02",
              title: "SMART DASHBOARD",
              description: "A highly centralized visual experience designed to keep critical system metrics instantly scannable and organized.",
            },
            {
              number: "03",
              title: "AI-POWERED INSIGHTS",
              description: "Leverage machine learning to predict trends, automate decisions, and unlock hidden opportunities in your data.",
            },
            {
              number: "04",
              title: "SEAMLESS INTEGRATION",
              description: "Connect with your existing tools and platforms effortlessly through our robust API and modular architecture.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 md:gap-8"
            >
              <div
                className="text-6xl md:text-8xl font-black text-white leading-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feature.number}
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm md:text-base text-white/70 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;