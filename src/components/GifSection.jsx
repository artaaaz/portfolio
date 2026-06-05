import React from 'react';

const GifSection = () => {
    return (
        <section id="gifsection" className="relative w-full section-modern bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Sky Background Container */}
                <div className="relative w-full h-[400px] md:h-[550px] bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 rounded-lg overflow-hidden">

                    {/* Clouds */}
                    <div className="absolute w-72 h-24 bg-white/60 rounded-full blur-xl" style={{ top: '15%', left: '10%' }}></div>
                    <div className="absolute w-96 h-32 bg-white/50 rounded-full blur-2xl" style={{ top: '30%', right: '15%' }}></div>
                    <div className="absolute w-64 h-28 bg-white/60 rounded-full blur-xl" style={{ top: '65%', left: '50%' }}></div>
                    <div className="absolute w-80 h-32 bg-white/50 rounded-full blur-2xl" style={{ top: '75%', right: '25%' }}></div>

                    {/* GIF/Video Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Ganti src dengan path GIF/video kamu */}
                        <img
                            src="/videos/ituh.gif"
                            alt="Portfolio Work"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback kalau GIF gak ada
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                            }}
                        />

                        {/* Fallback Box */}
                        <div className="hidden w-full h-full items-center justify-center bg-blue-500/20">
                            <p className="text-white font-bold text-xl">Add your GIF/video here</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GifSection;