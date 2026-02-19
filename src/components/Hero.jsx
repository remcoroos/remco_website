import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Magnetic from './Magnetic';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end justify-start bg-black">
            {/* Cinematic Background */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img
                    src="/Profiel.png"
                    alt="Remco Roos"
                    width="1265"
                    height="1062"
                    className="w-full h-full object-cover md:object-contain object-top md:object-bottom animate-cinematic-zoom hero-image"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600'; }}
                />
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 pb-24 md:pb-32">
                <div className="mb-8 overflow-hidden">
                    <h1
                        className="text-4xl md:text-[4.5rem] lg:text-[6rem] font-black text-white tracking-tighter leading-[0.9] uppercase animate-slide-up drop-shadow-2xl text-left text-gradient-metallic"
                        aria-label="Remco Roos - Performance Marketeer"
                    >
                        <span aria-hidden="true">Remco <br /> Roos</span>
                    </h1>
                    <p className="text-gold text-lg md:text-2xl font-bold tracking-wider uppercase mt-4 animate-slide-up delay-100">
                        {t.hero.tagline}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm md:text-lg font-bold tracking-widest text-gray-300 mb-12 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
                    <span className="text-white">{t.hero.subline}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-4 animate-slide-up w-full md:w-auto" style={{ animationDelay: '0.4s' }}>
                    <Magnetic>
                        <a href="#professional" className="btn-sleek btn-glow px-8 py-4 border border-white bg-white/10 backdrop-blur-sm text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all inline-block w-full md:w-auto text-center">
                            {t.hero.btnExpertise}
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#contact" className="btn-sleek btn-glow px-8 py-4 border border-white/20 bg-black/20 backdrop-blur-sm text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/10 inline-block w-full md:w-auto text-center">
                            {t.hero.btnContact}
                        </a>
                    </Magnetic>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 animate-bounce text-white/50 z-20 hidden md:block">
                <ArrowDown size={20} />
            </div>
        </section>
    );
};

export default Hero;
