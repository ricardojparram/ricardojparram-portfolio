import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavDict {
  work: string;
  about: string;
  experience: string;
  services: string;
  contact?: string;
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
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04 + 0.06 },
  }),
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
  const [activeSection, setActiveSection] = useState("work");

  const navLinks = [
    { key: "work", label: nav.work },
    { key: "about", label: nav.about },
    { key: "experience", label: nav.experience },
    // { key: 'services', label: nav.services },
  ];

  useEffect(() => {
    const sectionIds = ["work", "about", "experience"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = sectionIds[0];
      const offset = 220;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && window.scrollY + offset >= section.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "pt-0 pb-0 md:footer-glass md:backdrop-blur-xl md:bg-transparent md:backdrop-blur-0 md:shadow-none"
          : "pt-5 pb-0"
      }`}
    >
      <div className="px-4 md:px-7">
        <div
          className={`max-w-6xl mx-auto overflow-visible transition-all duration-500`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "px-0 py-2 md:py-2.5" : "px-0 py-0 md:py-1.5"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`flex items-center gap-2 group cursor-pointer transition-all ${
                scrolled
                  ? "px-3 py-1.5 rounded-full border md:border-0 glass-card shadow-[0_6px_18px_rgba(0,0,0,0.35)]! md:px-0 md:py-0 md:rounded-none md:bg-none md:shadow-none"
                  : "px-0 py-0 rounded-none border border-transparent bg-transparent shadow-none"
              }`}
              aria-label="Ricardo J. Parra"
            >
              <span className="text-white text-lg font-semibold tracking-tight">
                Ricardo J. Parra
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`relative px-0 pb-2 pt-1 text-sm font-semibold transition-colors ${
                    activeSection === key
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  aria-current={activeSection === key ? "page" : undefined}
                >
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-zinc-300 transition-all duration-300 ${
                      activeSection === key
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA + Language Switcher + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="hidden md:flex h-9 px-5 items-center justify-center rounded-full text-white text-sm font-semibold transition-all border border-white/12 bg-linear-to-br from-zinc-800 to-zinc-950 hover:border-zinc-300/30 hover:from-zinc-700 hover:to-zinc-900"
              >
                {nav.cta}
              </button>

              {/* Language Switcher — desktop */}
              <div className="hidden md:block">
                <LanguageSwitcher currentLang={lang} />
              </div>

              {/* Mobile toggle */}
              <button
                className={`md:hidden relative size-10 flex border-transparent items-center justify-center text-zinc-300 hover:text-white transition-colors rounded-full overflow-hidden ${scrolled ? "glass-card" : ""}`}
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
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
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
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <Menu className="size-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="md:hidden mt-3 px-4 md:px-7"
          >
            <div className="max-w-6xl mx-auto rounded-2xl glass-card px-4 py-4 flex flex-col gap-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)]!">
              {navLinks.map(({ key, label }, i) => (
                <motion.button
                  key={key}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => scrollTo(key)}
                  className={`text-left px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                    activeSection === key
                      ? "text-white bg-white/10"
                      : "text-zinc-300 hover:bg-white/10"
                  }`}
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
                className="pt-3 border-t border-white/8 mt-2 w-full flex items-center justify-between gap-3 "
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex h-9 px-5 items-center justify-center rounded-full text-white text-sm font-semibold transition-all border border-white/12 bg-linear-to-br from-zinc-800 to-zinc-950 hover:border-zinc-300/30 hover:from-zinc-700 hover:to-zinc-900"
                >
                  {nav.cta}
                </button>
                <LanguageSwitcher currentLang={lang} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
