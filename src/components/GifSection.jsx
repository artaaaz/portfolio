import React from 'react';
import { motion } from 'framer-motion';

const GifSection = () => {
    return (
        <section
            className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/image/Rectangle 2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0
            }}
        >
            {/* GIF DI TENGAH AJA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <img
                    src="/image/eyes.gif"
                    alt="GIF Animation"
                    className="w-[350px] md:w-[550px] lg:w-[750px] h-auto object-contain drop-shadow-2xl"
                />
            </motion.div>
        </section>
    );
};

export default GifSection;