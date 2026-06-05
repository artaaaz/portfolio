import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    initial={{ scale: 0.9, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#831514] hover:text-white transition-colors z-10 text-lg font-bold">
                        ✕
                    </button>
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <span className="text-xs font-bold text-[#831514] uppercase tracking-widest">{project.category}</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mt-2 mb-4">{project.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-200 pt-6">
                            <div><span className="font-bold text-black block mb-1">Tools Used</span>{project.tools}</div>
                            <div><span className="font-bold text-black block mb-1">Year</span>{project.year}</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;