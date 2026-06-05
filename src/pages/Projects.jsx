import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Data Project Kamu
const projects = [
    {
        id: 1,
        title: "SIJA BAZMA REPORT",
        category: "Graphic Design",
        desc: "Desain laporan bulanan untuk OSIS dengan gaya modern dan informatif.",
        color: "bg-blue-600"
    },
    {
        id: 2,
        title: "SPMB UI/UX",
        category: "Web Design",
        desc: "Redesign sistem pendaftaran siswa baru agar lebih user-friendly.",
        color: "bg-purple-600"
    },
    {
        id: 3,
        title: "MENTION BRANDING",
        category: "Social Media",
        desc: "Identitas visual dan konten kreator untuk media sosial sekolah.",
        color: "bg-red-600"
    },
    {
        id: 4,
        title: "MAJALAH PRISMA",
        category: "Layout",
        desc: "Layouting majalah edisi Vol 2 & 3 dengan tipografi yang kuat.",
        color: "bg-yellow-500"
    },
    {
        id: 5,
        title: "AYO IMUNISASI",
        category: "Poster",
        desc: "Poster kampanye kesehatan dengan visual yang menarik perhatian.",
        color: "bg-green-600"
    },
    {
        id: 6,
        title: "BAZMA EVENT",
        category: "Documentation",
        desc: "Dokumentasi visual untuk berbagai kegiatan sekolah.",
        color: "bg-gray-800"
    }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", "Graphic Design", "Web Design", "Poster", "Layout"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-[#f8f8f8] grid-paper relative pt-24">

            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f8f8]/90 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                    <Link to="/" className="text-[#831514] font-black text-xl tracking-tight">arthuertham</Link>
                    <div className="flex gap-6">
                        <Link to="/" className="text-sm font-bold hover:text-[#831514]">Home</Link>
                        <Link to="/projects" className="text-sm font-bold text-[#831514]">Projects</Link>
                        <a href="#footer" className="text-sm font-bold hover:text-[#831514]">Contact</a>
                    </div>
                </div>
            </nav>

            {/* HEADER */}
            <div className="pt-20 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <h1 className="text-6xl md:text-8xl font-black text-[#831514] leading-[0.8] tracking-tighter mb-8">
                    SELECTED<br />WORKS
                </h1>

                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-3 font-black text-sm uppercase tracking-wider border-2 border-black transition-all
                ${activeFilter === cat
                                    ? 'bg-[#831514] text-white border-[#831514]'
                                    : 'bg-transparent text-black hover:bg-black hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* PROJECTS GRID */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative border-2 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_#831514] transition-all duration-300"
                        >
                            {/* Placeholder Image */}
                            <div className={`h-64 w-full ${project.color} flex items-center justify-center overflow-hidden`}>
                                <span className="text-white font-black text-6xl opacity-20">
                                    {project.title.charAt(0)}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-1">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-bold text-[#831514] opacity-0 group-hover:opacity-100 transition-opacity">
                                        VIEW →
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-black leading-tight mb-2 group-hover:text-[#831514] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BACK TO HOME */}
            <div className="text-center py-8 border-t-2 border-black">
                <Link to="/" className="inline-block text-sm font-black uppercase tracking-widest hover:text-[#831514] transition-colors">
                    ← Back to Home
                </Link>
            </div>

        </div>
    );
};

export default Projects;