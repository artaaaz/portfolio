import React from 'react';

const RunningText = ({ text = 'poster' }) => {
    return (
        <div className="relative z-20 w-full overflow-hidden bg-brutal-red grid-paper-dark py-6">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(8)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="text-4xl md:text-6xl font-black text-white mx-8 lowercase">
                            {text}
                        </span>
                        <span className="text-4xl md:text-6xl text-white/30 mx-8">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default RunningText;