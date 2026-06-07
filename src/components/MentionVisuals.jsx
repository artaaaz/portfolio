import React from 'react';
import { motion } from 'framer-motion';

const MentionVisuals = () => {
    return (
<section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

    {/* Background Image (Kuning Gradient) */}
    <div className="absolute inset-0">
        <img
            src="/image/Rectangle 2.png"
            alt="Mention Background"
            className="w-full h-full object-cover"
        />
    </div>

    {/* Logo di Atas Background (Center) */}
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-full flex items-center justify-center px-8"
    >
        <img
            src="/image/mention.png"
            alt="Mention Logo"
            className="w-full h-auto max-w-4xl object-contain"
        />
    </motion.div>

</section>
  );
};

export default MentionVisuals;