/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {
                black: '#050505',
                dark: '#0a0a0a',
                white: '#ffffff',
                gray: {
                    100: '#f3f4f6',
                    500: '#6b7280',
                    800: '#1f2937',
                    900: '#111827',
                },
                accent: '#ffffff', // White
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.02em',
                widest: '0.25em',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'cinematic-zoom': 'cinematicZoom 20s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                reveal: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                cinematicZoom: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' },
                }
            },
        },
    },
    plugins: [],
}
