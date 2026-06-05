import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="relative w-full py-16 md:py-24 bg-transparent overflow-hidden">
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                
                {/* Main Thank You Text - KURANGIN MARGIN */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <h1
                        className="text-[#831514] lowercase text-center"
                        style={{
                            fontSize: '14vw',
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            fontWeight: '400',
                            lineHeight: '0.85',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        thank you
                        <br />
                        so much
                    </h1>
                </div>

                {/* All Text - FONT SIZE SAMA PERSIS */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#831514] text-base md:text-lg font-bold text-center md:text-left">
                        thank you so much
                        <br />
                        for scrolling all the way down here!
                    </p>

                    {/* Contact Info - FONT SIZE SAMA PERSIS */}
                    <div className="text-center md:text-right">
                        <p className="text-[#831514] text-base md:text-lg font-bold">
                            (contact for work)
                        </p>
                        <a href="mailto:erlangga@example.com" className="text-[#831514] text-base md:text-lg font-bold block hover:underline">
                            erlangga@example.com
                        </a>
                        <p className="text-[#831514] text-base md:text-lg font-bold">
                            instagram: seangotnovuitton
                        </p>
                    </div>
                </div>

                {/* Copyright - KURANGIN MARGIN */}
                <div className="text-center pt-8 mt-8 border-t border-gray-300">
                    <p className="text-sm text-gray-500 font-bold">
                        © 2026 Erlangga Artha Dwi Cahya. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;