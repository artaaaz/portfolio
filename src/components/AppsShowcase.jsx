import React from 'react';

const AppsShowcase = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-6 md:p-12"
      style={{
        // Kombinasi background hitam solid dengan radial glow yang halus
        background: "radial-gradient(circle at 50% 50%, #1a1a00 0%, #0a0a00 70%)",
      }}
    >
      {/* Background Glow yang konsisten */}
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_50%_50%,#FFE600_0%,transparent_70%)]"></div>
      
      {/* Container utama dengan ukuran yang lebih dominan */}
      <div className="relative z-10 w-full max-w-[95rem] h-[85vh] flex items-center justify-center">
        <img 
          src="/image/damn.png" 
          alt="Mention Apps Showcase" 
          className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,1)]" 
        />
      </div>
    </section>
  );
};

export default AppsShowcase;