import React from 'react';

const PosterShowcase = () => {
    return (
        <section className="relative w-full py-8 md:py-12 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">

                {/* === HEADER === */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                        <div>
                            <h2 className="text-[#831514] font-black text-5xl md:text-6xl leading-[0.85] tracking-tighter whitespace-nowrap">
                                1. account manager
                            </h2>
                        </div>

                    </div>

                    <div className="md:pt-5 max-w-lg">
                        <p className="text-base leading-snug tracking-tight">
                            <span className="font-bold">Started with a passion for poster design</span>{' '}
                            using it as a creative playground to experiment with{' '}
                            <span className="font-bold">bold layouts and unique visual storytelling</span>{' '}
                        </p>
                    </div>
                </div>

                {/* === GRID POSTER - AUTO HEIGHT === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-auto items-start">

                    {/* Poster 1 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster7.png"
                            alt="Poster 1"
                            className="w-full h-auto block"
                        />
                    </div>

                    {/* Poster 2 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster9.png"
                            alt="Poster 2"
                            className="w-full h-auto block"
                        />
                    </div>

                    {/* Poster 3 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster3.png"
                            alt="Poster 3"
                            className="w-full h-auto block"
                        />
                    </div>

                    {/* Poster 4 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster4.png"
                            alt="Poster 4"
                            className="w-full h-auto block"
                        />
                    </div>

                    {/* Poster 5 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster8.png"
                            alt="Poster 5"
                            className="w-full h-auto block"
                        />
                    </div>

                    {/* Poster 6 */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full">
                        <img
                            src="/image/poster6.png"
                            alt="Poster 6"
                            className="w-full h-auto block"
                            onError={(e) => {
                                e.target.parentElement.style.display = 'none';
                            }}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PosterShowcase;