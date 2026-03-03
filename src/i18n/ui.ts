import es from './es';
import en from './en';

const ui = { es, en } as const;

type Lang = keyof typeof ui;

/**
 * Returns the UI translation dictionary for the given language.
 * Falls back to 'es' for unknown locales.
 *
 * @example
 * const t = useTranslations(Astro.currentLocale ?? 'es');
 * t.work.title // 'Trabajos Seleccionados' | 'Selected Works'
 */
export function useTranslations(lang: string) {
    const l = (lang in ui ? lang : 'es') as Lang;
    return ui[l];
}
