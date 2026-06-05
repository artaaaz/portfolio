import React from 'react';

const Work = () => {
    const works = [
        {
            title: 'Graphic Design',
            count: '12 Projects',
            description: 'Creating visual identities, posters, and marketing materials with modern aesthetics.',
            icon: '🎨'
        },
        {
            title: 'UI/UX Design',
            count: '8 Projects',
            description: 'Designing user-friendly interfaces and experiences for web and mobile applications.',
            icon: ''
        },
        {
            title: 'Video Editing',
            count: '15 Videos',
            description: 'Producing engaging video content for social media and promotional purposes.',
            icon: '🎬'
        },
        {
            title: 'Photography',
            count: '50+ Photos',
            description: 'Capturing moments through professional photography and photo manipulation.',
            icon: '📷'
        },
    ];

    return (
        <section id="work" className="relative w-full section-modern bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl font-black text-[#831514] leading-[0.95] tracking-tight mb-4">
                        selected works
                    </h2>
                    <div className="w-20 h-1 bg-[#831514] rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {works.map((work, index) => (
                        <div key={index} className="modern-card p-8 group cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-14 h-14 bg-[#831514]/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    {work.icon}
                                </div>
                                <span className="text-3xl font-black text-[#831514] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                    →
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#831514] transition-colors">
                                {work.title}
                            </h3>
                            <p className="text-sm font-medium text-[#831514] mb-3">{work.count}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;