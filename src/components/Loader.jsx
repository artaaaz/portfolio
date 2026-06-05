import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[#f4f1ea] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.h1
                        className="text-[#831514] text-5xl md:text-7xl font-serif lowercase tracking-tighter"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        loading...
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;