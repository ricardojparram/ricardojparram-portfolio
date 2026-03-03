'use client';

interface Props {
    currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: Props) {
    const goTo = (lang: string) => {
        if (lang === 'es') {
            window.location.href = '/';
        } else {
            window.location.href = `/${lang}/`;
        }
    };

    return (
        <div className="flex items-center h-[40px] gap-1 bg-white/10 rounded-full p-1 border border-white/10 backdrop-blur-md">
            <button
                onClick={() => goTo('es')}
                aria-label="Español"
                className={`px-3 py-1.5 rounded-full h-full text-xs font-bold uppercase tracking-wider transition-all ${currentLang === 'es'
                    ? 'bg-primary/50 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => goTo('en')}
                aria-label="English"
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${currentLang === 'en'
                    ? 'bg-primary/50 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
