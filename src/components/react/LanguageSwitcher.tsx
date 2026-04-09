"use client";

interface Props {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: Props) {
  const goTo = (lang: string) => {
    // Mark that the user has explicitly chosen a language so the
    // middleware won't override it with an automatic redirect.
    document.cookie =
      "lang-redirected=1; path=/; max-age=31536000; SameSite=Lax";

    if (lang === "es") {
      window.location.href = "/";
    } else {
      window.location.href = `/${lang}/`;
    }
  };

  return (
    <div className="flex items-center gap-1 h-9 px-1 rounded-full border border-white/12 bg-linear-to-br from-zinc-800 to-zinc-950">
      <button
        onClick={() => goTo("es")}
        aria-label="ES - Español"
        className={`px-3 h-7 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
          currentLang === "es"
            ? "bg-zinc-200 text-zinc-900"
            : "text-zinc-300 hover:text-white hover:bg-white/8"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => goTo("en")}
        aria-label="EN - English"
        className={`px-3 h-7 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
          currentLang === "en"
            ? "bg-zinc-200 text-zinc-900"
            : "text-zinc-300 hover:text-white hover:bg-white/8"
        }`}
      >
        EN
      </button>
    </div>
  );
}
