import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Professional from './components/Professional';
import Role from './components/Role';
import Personal from './components/Personal';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll, .reveal-text-container').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-sans">
        <Header />
        <main>
          <Hero />
          <Professional />
          <Role />
          <Personal />
          <FAQ />
          <Contact />
        </main>
        <footer className="bg-black text-white py-24 border-t border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-[12vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none pointer-events-none opacity-50">
              REMCO ROOS
            </h2>
            <div className="absolute bottom-8 flex flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold mb-2">Performance Marketeer</p>
              <p className="text-[10px] text-gray-800 font-mono">© {new Date().getFullYear()}</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
