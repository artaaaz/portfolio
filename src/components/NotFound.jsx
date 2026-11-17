import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-start justify-end bg-paper text-ink p-5 md:p-10">
            <p className="label text-muted mb-4">Error</p>
            <h1 className="text-[30vw] md:text-[20vw] font-semibold leading-[0.8] tracking-[-0.05em]">404</h1>
            <p className="mt-6 text-2xl font-medium tracking-tight">Page not found.</p>
            <Link to="/" className="pill pill-dark mt-8">
                ← Back to portfolio
            </Link>
        </div>
    );
};

export default NotFound;
