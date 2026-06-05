// src/hooks/useCounter.js
import { useState, useEffect } from 'react';

// ✅ HANYA HOOK, TANPA COMPONENT
export const useCounter = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [hasStarted, target, duration]);

    return [setRef, count];
};