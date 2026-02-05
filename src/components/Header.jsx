import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.professional, href: '#professional' },
        { name: t.nav.werkwijze, href: '#werkwijze' },
        { name: t.nav.personal, href: '#personal' },
        { name: t.nav.faq, href: '#faq' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const toggleLang = (lang) => {
        setLanguage(lang);
        setIsMenuOpen(false);
    };

    return (
        <React.Fragment>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? (isMenuOpen ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md border-b border-white/10') : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
                    <a href="#" className="text-lg tracking-tighter text-white z-50 group">
                        <span className="font-light text-gray-400 group-hover:text-white transition-colors">REMCO</span>
                        <span className="font-black">ROOS</span>
                        <span className="text-accent font-bold">.</span>
                    </a>

                    <div className="flex items-center gap-12">
                        <nav className="hidden lg:flex space-x-12">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="nav-link-hover text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Language Switcher Desktop */}
                        <div className="hidden lg:flex items-center text-[10px] font-bold uppercase tracking-widest gap-2">
                            <button
                                onClick={() => setLanguage('nl')}
                                className={`transition-colors ${language === 'nl' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
                            >
                                NL
                            </button>
                            <span className="text-gray-700">/</span>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`transition-colors ${language === 'en' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
                            >
                                EN
                            </button>
                        </div>

                        <button className="lg:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col space-y-8 text-center">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-4xl md:text-5xl font-black uppercase tracking-tighter text-white hover:text-gray-500 transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Language Switcher Mobile */}
                <div className="mt-12 flex items-center gap-6">
                    <button
                        onClick={() => toggleLang('nl')}
                        className={`text-lg font-bold uppercase tracking-widest ${language === 'nl' ? 'text-white border-b border-white' : 'text-gray-500'}`}
                    >
                        NL
                    </button>
                    <button
                        onClick={() => toggleLang('en')}
                        className={`text-lg font-bold uppercase tracking-widest ${language === 'en' ? 'text-white border-b border-white' : 'text-gray-500'}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
