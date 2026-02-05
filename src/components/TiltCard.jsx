import React, { useRef, useEffect } from 'react';

const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const card = ref.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation based on mouse position
            // Max 5deg rotation as per original code
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Add transition for smooth reset
        card.style.transition = 'transform 0.1s ease-out';

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={ref} className={`tilt-card ${className}`} style={{ transformStyle: 'preserve-3d' }}>
            <div className="tilt-content" style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
