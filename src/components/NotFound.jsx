import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] text-center px-4">
            <h1 className="text-8xl md:text-9xl font-serif text-[#831514] mb-4">404</h1>
            <p className="text-2xl font-bold text-gray-800 mb-2">Page not found.</p>
            <p className="text-gray-500 mb-8">The creative journey continues elsewhere.</p>
            <Link to="/" className="px-8 py-3 bg-[#831514] text-white font-bold rounded-lg hover:bg-[#5a0e0e] transition-colors">
                ← Back to Portfolio
            </Link>
        </div>
    );
};

export default NotFound;