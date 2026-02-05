import React, { useRef, useEffect } from 'react';

const Magnetic = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const resetTransform = () => {
            element.style.transform = `translate(0px, 0px)`;
        };

        const handleMouseMove = (e) => {
            // Only apply magnetic effect on desktop (non-touch devices)
            if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                const { clientX, clientY } = e;
                const { height, width, left, top } = element.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);

                // Move element towards mouse
                element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            }
        };

        const handleMouseLeave = () => {
            resetTransform();
        };

        const handleClick = () => {
            // Reset transform when clicked (important for navigation)
            resetTransform();
        };

        const handleScroll = () => {
            // Reset transform when scrolling
            resetTransform();
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("click", handleClick);
        window.addEventListener("scroll", handleScroll);

        // Add smooth transition for return animation
        element.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("click", handleClick);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return React.cloneElement(children, { ref });
};

export default Magnetic;
