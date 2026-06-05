import React from 'react';

const BrandShowcase = () => {
    return (
        <section className="relative w-full py-8 md:py-12 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">

                {/* === HEADER === */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                        <h2 className="text-[#831514] font-black text-7xl md:text-8xl leading-[0.85] tracking-tighter">
                            2.
                        </h2>
                        <h2 className="text-[#831514] font-black text-5xl md:text-6xl leading-[0.85] tracking-tighter uppercase">
                            brand<br />identity
                        </h2>
                    </div>

                    <div className="md:pt-4 max-w-md">
                        <p className="text-black text-sm font-bold leading-relaxed mb-2">
                            Building visual systems that speak louder than words.
                        </p>
                        <p className="text-black text-sm font-bold leading-relaxed">
                            From logos to complete brand guidelines, every detail is crafted with purpose.
                        </p>
                    </div>
                </div>

                {/* === GRID POSTER (Efek 3D Stroke Sama) === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-auto items-start">

                    {/* Item 1 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand1.png" alt="Brand 1" className="w-full h-auto block" />
                    </div>

                    {/* Item 2 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand2.png" alt="Brand 2" className="w-full h-auto block" />
                    </div>

                    {/* Item 3 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand3.png" alt="Brand 3" className="w-full h-auto block" />
                    </div>

                    {/* Item 4 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand4.png" alt="Brand 4" className="w-full h-auto block" />
                    </div>

                    {/* Item 5 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand5.png" alt="Brand 5" className="w-full h-auto block" />
                    </div>

                    {/* Item 6 */}
                    <div className="group relative bg-white transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#831514] w-full">
                        <img src="/image/brand6.png" alt="Brand 6" className="w-full h-auto block"
                            onError={(e) => e.target.parentElement.style.display = 'none'}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;