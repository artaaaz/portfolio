import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Gallery = () => {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        { id: 1, image: "/image/gallery/mount-sumbing.jpg", title: "Mount Sumbing Expedition", category: "Adventure", year: "2024" },
        { id: 2, image: "/image/gallery/mount-sindoro.jpg", title: "Mount Sindoro Expedition", category: "Adventure", year: "2024" },
        { id: 3, image: "/image/gallery/graduation.jpg", title: "Graduation Day", category: "Achievement", year: "2024" },
        { id: 4, image: "/image/gallery/sunrise.jpg", title: "Harmony at Sunrise", category: "Photography", year: "2023" },
        { id: 5, image: "/image/gallery/teacher-day.jpg", title: "Teacher Day", category: "School", year: "2024" },
        { id: 6, image: "/image/gallery/event-1.jpg", title: "Design Workshop", category: "Event", year: "2024" },
        { id: 7, image: "/image/gallery/event-2.jpg", title: "Team Building", category: "Activity", year: "2025" },
        { id: 8, image: "/image/gallery/event-3.jpg", title: "Creative Session", category: "Work", year: "2024" }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* ✅ TIDAK ADA BACKGROUND HITAM - BIAR GRID GLOBAL TEMBUS */}

            <div className="relative z-10 max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-[#831514]/10 rounded-full text-sm font-bold text-[#831514] mb-4 border border-[#831514]/20">
                            Gallery Showcase
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] mb-6">
                            My Journey & <span className="text-[#831514]">Memories</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Collection of experiences, achievements, projects, competitions, and memorable moments.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Gallery Container */}
                <div className="relative">
                    <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-md hover:bg-[#831514] hover:text-white rounded-full flex items-center justify-center text-[#1a1a1a] transition-all border border-gray-200">←</button>
                    <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-md hover:bg-[#831514] hover:text-white rounded-full flex items-center justify-center text-[#1a1a1a] transition-all border border-gray-200">→</button>

                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-8 px-4" style={{ scrollSnapType: 'x mandatory' }}>
                        {galleryItems.map((item, index) => (
                            <ScrollReveal key={item.id} delay={index * 0.1}>
                                <motion.div className="flex-shrink-0 w-72 cursor-pointer group" style={{ scrollSnapAlign: 'center' }} whileHover={{ scale: 1.05 }} onClick={() => setSelectedImage(item)}>
                                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200">
                                        <div className="aspect-[3/4] overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600/f4f1ea/831514?text=No+Image'; }} />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-[#831514] text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                                            <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                                            <p className="text-gray-200 text-sm mt-1">{item.year}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                <ScrollReveal>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-[#831514] hover:bg-[#5a0e0e] text-white font-bold rounded-full transition-all shadow-lg border border-[#831514] hover:-translate-y-0.5">
                            View All Memories →
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-all border border-white/20">×</button>
                    <div className="max-w-4xl w-full">
                        <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto rounded-2xl shadow-2xl" />
                        <div className="mt-6 text-center">
                            <p className="text-[#831514] text-sm font-bold uppercase tracking-wider mb-2">{selectedImage.category}</p>
                            <h3 className="text-[#1a1a1a] text-3xl font-bold mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-500">{selectedImage.year}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default Gallery;