import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <div className={`reveal-on-scroll stagger-${(index % 5) + 1}`}>
            <div
                className={`group border-b border-white/10 transition-all duration-700 ${isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
            >
                <button
                    onClick={onClick}
                    className="w-full py-12 flex gap-8 md:gap-16 items-start text-left relative focus:outline-none px-4 md:px-8"
                >
                    {/* Number & Line Decoration */}
                    <div className="flex flex-col items-center gap-4 pt-2 md:pt-3">
                        <span className={`text-xs font-bold tracking-widest transition-colors duration-500 ${isOpen ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                            {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <div className={`w-px transition-all duration-700 ease-out ${isOpen ? 'h-12 bg-white' : 'h-0 bg-white/20'}`}></div>
                    </div>

                    {/* Question Content */}
                    <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <h3 className={`text-2xl md:text-4xl font-bold tracking-tighter transition-all duration-500 max-w-4xl ${isOpen ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                            {question}
                        </h3>

                        {/* Plus/Minus Icon */}
                        <div className={`shrink-0 w-14 h-14 rounded-full border transition-all duration-500 flex items-center justify-center ${isOpen ? 'bg-white text-black border-white rotate-[135deg] shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'border-white/10 text-gray-500 group-hover:border-white group-hover:text-white'}`}>
                            <Plus size={24} strokeWidth={1.5} />
                        </div>
                    </div>
                </button>

                {/* Answer Section */}
                <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className="pl-16 md:pl-32 pr-8 pb-16">
                            <div className="max-w-3xl">
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-40 bg-black text-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-16">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-8 opacity-60 reveal-on-scroll">
                                {t.faq.subtitle}
                            </span>
                            <div className="reveal-text-container">
                                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] reveal-text">
                                    {t.faq.heading}
                                    <span className="text-white/20">.</span>
                                </h2>
                            </div>
                        </div>

                        <div className="max-w-xs md:text-right reveal-on-scroll delay-300">
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
                                {t.faq.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {t.faq.questions.map((item, idx) => (
                        <FAQItem
                            key={idx}
                            index={idx}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>

                {/* Footer simple CTA */}
                <div className="mt-32 text-center reveal-on-scroll">
                    <p className="text-gray-500 text-lg mb-8 italic">Staat je vraag er niet tussen?</p>
                    <a href="#contact" className="inline-block text-white font-bold border-b border-white/20 pb-2 hover:border-white transition-colors">
                        Stel je vraag direct &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
