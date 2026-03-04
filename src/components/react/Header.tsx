import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavDict {
    work: string;
    about: string;
    experience: string;
    services: string;
    contact: string;
    cta: string;
}

interface HeaderProps {
    nav: NavDict;
    lang: string;
}

const menuVariants = {
    hidden: { opacity: 0, y: -12, scaleY: 0.95 },
    visible: { opacity: 1, y: 0, scaleY: 1 },
    exit: { opacity: 0, y: -12, scaleY: 0.95 },
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.04 + 0.06 } }),
    exit: { opacity: 0, x: -10 },
};

const iconVariants = {
    initial: { rotate: -90, scale: 0.5, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 90, scale: 0.5, opacity: 0 },
};

export default function Header({ nav, lang }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { key: 'work', label: nav.work },
        { key: 'about', label: nav.about },
        { key: 'experience', label: nav.experience },
        // { key: 'services', label: nav.services },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
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
                    className={`flex items-center gap-3 group cursor-pointer px-2 pr-4 py-2 ${scrolled
                        ? 'bg-white/5 rounded-full border border-white/5 backdrop-blur-md'
                        : 'bg-transparent border border-transparent'
                        }`}
                    aria-label="Scroll to top"
                >
                    <div className="size-10 rounded-full flex items-center justify-center shadow-lg transition-shadow group-hover:shadow-primary/40 bg-gradient-to-br from-primary to-purple-600">
                        <Code2 className="text-white size-6" />
                    </div>
                    <span className="text-white text-xl font-bold tracking-tight">Ricardo Parra</span>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/8 rounded-full p-1 border border-white/5 backdrop-blur-md">
                    {navLinks.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => scrollTo(key)}
                            className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                {/* CTA + Language Switcher + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scrollTo('contact')}
                        className="hidden md:flex h-10 px-6 items-center justify-center rounded-full text-white text-sm font-semibold transition-all border border-white/10 backdrop-blur-sm bg-white/8 hover:bg-primary/50 hover:border-primary/50 hover:border-primary"
                    >
                        {nav.cta}
                    </button>

                    {/* Language Switcher — desktop */}
                    <div className="hidden md:block">
                        <LanguageSwitcher currentLang={lang} />
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden relative size-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10 backdrop-blur-md overflow-hidden"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            {menuOpen ? (
                                <motion.span
                                    key="close"
                                    variants={iconVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    style={{ display: 'inline-flex' }}
                                >
                                    <X className="size-6" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="open"
                                    variants={iconVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    style={{ display: 'inline-flex' }}
                                >
                                    <Menu className="size-6" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ transformOrigin: 'top center' }}
                        className="md:hidden bg-white/5 border border-white/10 backdrop-blur-md mt-2 px-6 py-4 flex flex-col gap-2 mx-6 rounded-xl"
                    >
                        {navLinks.map(({ key, label }, i) => (
                            <motion.button
                                key={key}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={() => scrollTo(key)}
                                className="text-left px-4 py-3 text-white hover:bg-white/20 rounded-xl transition-colors text-sm font-medium"
                            >
                                {label}
                            </motion.button>
                        ))}

                        {/* Language Switcher — mobile */}
                        <motion.div
                            custom={navLinks.length}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="pt-2 border-t border-white/5 mt-2 w-fit"
                        >
                            <LanguageSwitcher currentLang={lang} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
