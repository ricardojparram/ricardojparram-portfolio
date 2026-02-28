import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = ['Work', 'About', 'Experience', 'Services', 'Contact'];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('es');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        // Detect current language from URL
        setCurrentLang(window.location.pathname.startsWith('/en') ? 'en' : 'es');
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`flex items-center gap-3 group cursor-pointer px-2 pr-4 py-2 ${scrolled ? 'bg-white/5 rounded-full border border-white/5 backdrop-blur-md' : 'bg-transparent border border-transparent'}`}
                    aria-label="Scroll to top"
                >
                    <div
                        className="size-10 rounded-full flex items-center justify-center shadow-lg transition-shadow group-hover:shadow-primary/40 bg-gradient-to-br from-primary to-purple-600"
                    >
                        <Code2 className="text-white size-6" />
                    </div>
                    <span className="text-white text-xl font-bold tracking-tight">Ricardo Parra</span>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* CTA + Language Switcher + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scrollTo('contact')}
                        className="hidden md:flex h-10 px-6 items-center justify-center rounded-full text-white text-sm font-semibold transition-all border border-white/10 backdrop-blur-sm bg-white/8 hover:bg-primary/50 hover:border-primary"
                    >
                        Let's Talk
                    </button>
                    {/* Language Switcher — desktop */}
                    <div className="hidden md:block">
                        <LanguageSwitcher currentLang={currentLang} />
                    </div>
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden glass-header border-t border-white/5 mt-2 px-6 py-4 flex flex-col gap-2">
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
                        >
                            {item}
                        </button>
                    ))}
                    {/* Language Switcher — mobile */}
                    <div className="pt-2 border-t border-white/5 mt-2">
                        <LanguageSwitcher currentLang={currentLang} />
                    </div>
                </div>
            )}
        </header>
    );
}
