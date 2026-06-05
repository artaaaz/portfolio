import { useState, useEffect } from 'react';

export const useInView = (threshold = 0.1) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, threshold]);

    return [setRef, isVisible];
};