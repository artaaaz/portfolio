import React from 'react';

const Stats = () => {
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '3', label: 'Years Experience' },
        { number: '100%', label: 'Satisfaction' },
    ];

    return (
        <section className="relative w-full py-16 bg-[#831514] text-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl md:text-6xl font-black mb-2">{stat.number}</p>
                            <p className="text-sm md:text-base font-bold uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;