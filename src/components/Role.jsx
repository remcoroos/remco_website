import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Role = () => {
    const { t } = useLanguage();
    return (
        <section id="werkwijze" className="py-32 bg-black text-white border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 border-b border-white/10 pb-8">
                    <span className="block text-accent font-bold tracking-widest text-xs uppercase mb-4 reveal-on-scroll">{t.role.subtitle}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Strengths */}
                    <div className="reveal-on-scroll">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 text-white min-h-[64px] flex items-end">{t.role.strengthsTitle}</h3>
                        <div className="space-y-8">
                            {t.role.strengths.map((item, idx) => (
                                <div key={idx} className={`group flex items-start gap-6 reveal-on-scroll stagger-${(idx % 5) + 1}`}>
                                    <span className="text-accent text-xl mt-0.5 shrink-0">✓</span>
                                    <span className="text-lg text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-4 w-full">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Weaknesses */}
                    <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 text-gray-500 min-h-[64px] flex items-end">{t.role.weaknessesTitle}</h3>
                        <p className="text-gray-400 mb-10 font-medium italic pl-32 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-24 before:h-px before:bg-gray-800">{t.role.weaknessesIntro}</p>
                        <div className="space-y-8 mb-16">
                            {t.role.weaknesses.map((item, idx) => (
                                <div key={idx} className="group flex items-start gap-6">
                                    <span className="text-gray-600 mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-gray-400 transition-colors w-24 shrink-0 text-right">Improve</span>
                                    <span className="text-lg text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors border-b border-white/5 group-hover:border-white/10 pb-4 w-full">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <p className="text-xl md:text-2xl font-bold italic text-white leading-tight">
                                "{t.role.closing}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Role;
