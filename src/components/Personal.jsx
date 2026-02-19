import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Personal = () => {
    const { t } = useLanguage();
    return (
        <React.Fragment>
            <section id="personal" className="py-32 bg-black text-white border-t border-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-24 border-b border-white/10 pb-8">
                        <span className="block text-accent font-bold tracking-widest text-xs uppercase mb-4 reveal-on-scroll">{t.personal.subtitle}</span>
                        <div className="reveal-text-container">
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none reveal-text">
                                {t.personal.heading}<span className="text-accent">.</span>
                            </h2>
                        </div>
                        <p className="text-xl text-gray-400 mt-6 max-w-2xl font-light reveal-on-scroll">{t.personal.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        {/* Sailing */}
                        <div className="group transition-transform duration-500 hover:scale-[1.01]">
                            <div className="aspect-video overflow-hidden mb-6 border border-white/10">
                                <img src="/Wedstrijdzeilen.png" alt="Zeilen" width="1024" height="1024" loading="lazy" className="w-full h-full object-cover grayscale-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534861996586-c3427939c2e8?auto=format&fit=crop&q=80&w=1600'; }} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase mb-2">{t.personal.sailingTitle}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">{t.personal.sailingDesc}</p>
                        </div>

                        {/* Running */}
                        <div className="group transition-transform duration-500 hover:scale-[1.01]">
                            <div className="aspect-video overflow-hidden mb-6 border border-white/10">
                                <img src="/Hardlopen.png" alt="Hardlopen" width="724" height="654" className="w-full h-full object-cover grayscale-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1600'; }} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase mb-2">{t.personal.runningTitle}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">{t.personal.runningDesc}</p>
                        </div>
                    </div>

                    <div className="bg-[#111] p-12 border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-white/10">
                        <div className="relative z-10 mb-8">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{t.personal.homeTitle}</h3>
                            <p className="text-lg text-gray-300 mb-6 font-light">{t.personal.homeDesc}</p>
                            <div className="w-12 h-1 bg-accent mb-6"></div>
                            <p className="text-xl font-medium text-white italic">"{t.personal.whoAmI}"</p>
                        </div>
                        <div className="relative w-full opacity-90 hover:opacity-100 transition-opacity duration-500">
                            <img src="/Gezin.png" alt="Remco Roos Gezin" width="532" height="400" className="w-full h-auto rounded-sm grayscale-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000'; }} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Personal;
