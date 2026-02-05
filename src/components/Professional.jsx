import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import TiltCard from './TiltCard';

const Professional = () => {
    const { t } = useLanguage();

    const ListItem = ({ text }) => (
        <div className="flex items-center gap-4 py-3 border-b border-white/10 last:border-none">
            <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <span className="text-lg font-light tracking-wide text-gray-200">
                {text}
            </span>
        </div>
    );

    return (
        <section id="professional" className="py-32 bg-[#050505] text-white border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 border-b border-white/10 pb-8">
                    <span className="block text-accent font-bold tracking-widest text-xs uppercase mb-4 reveal-on-scroll">{t.professional.subtitle}</span>
                    <div className="reveal-text-container">
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none reveal-text">
                            {t.professional.heading}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    <TiltCard className="lg:col-span-5 relative group">
                        <div className="overflow-hidden bg-[#111] relative">
                            <img
                                src="/Werk.webp"
                                alt="Remco Roos InfoTrade"
                                width="728"
                                height="611"
                                loading="lazy"
                                className="w-full h-full object-cover grayscale-img"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'; }}
                            />
                        </div>
                    </TiltCard>

                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="mb-8">
                            <p id="professional-summary" className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                                {t.professional.intro.split('InfoTrade').flatMap((part, i, arr) =>
                                    i < arr.length - 1 ? [part, <a key={i} href="https://www.infotrade.nl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent border-b border-white/20 hover:border-accent transition-colors">InfoTrade</a>] : [part]
                                )}
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed font-light mb-8 italic">
                                "{t.professional.problemSolver}"
                            </p>

                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-white">{t.professional.helpTitle}</h3>

                            <div className="flex flex-col gap-1 border-l-2 border-white/5 pl-6 mb-8">
                                {t.professional.list.map((item, idx) => (
                                    <div key={idx} className={`reveal-on-scroll stagger-${(idx % 5) + 1}`}>
                                        <ListItem text={item} />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                <p className="text-gray-300 font-light italic">
                                    {t.professional.style}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;
