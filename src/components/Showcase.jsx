import React from 'react';

const Showcase = () => {
    const projects = [
        { title: 'Brand Identity', category: 'Graphic Design', color: 'bg-gradient-to-br from-red-400 to-red-600' },
        { title: 'Mobile App UI', category: 'UI/UX', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
        { title: 'Social Media', category: 'Content', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
        { title: 'Video Production', category: 'Videography', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    ];

    return (
        <section id="showcase" className="relative w-full section-modern bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl font-black text-[#831514] leading-[0.95] tracking-tight mb-4">
                        showcase
                    </h2>
                    <div className="w-20 h-1 bg-[#831514] rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl">
                        A collection of my recent projects and creative works across various design disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {projects.map((project, i) => (
                        <div key={i} className={`aspect-square ${project.color} rounded-2xl p-6 flex flex-col justify-end group cursor-pointer hover:scale-[1.02] transition-transform shadow-lg`}>
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <p className="text-white/80 text-xs font-medium mb-1">{project.category}</p>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Showcase;