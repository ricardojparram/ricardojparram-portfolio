import { defineMiddleware } from "astro:middleware";

// All locales where Spanish (or closely related) is native — no redirect for these
const ES_LOCALES = ["es", "ca", "gl", "eu"];

export const onRequest = defineMiddleware(
    ({ request, cookies, redirect }, next) => {
        const url = new URL(request.url);

        // Only redirect on the root path (ES default, prefixDefaultLocale: false)
        if (url.pathname !== "/") return next();

        // Respect user's explicit language choice (set by LanguageSwitcher)
        if (cookies.get("lang-redirected")?.value === "1") return next();

        const acceptLang = request.headers.get("accept-language") ?? "";

        // Parse "es-VE,es;q=0.9,en;q=0.8" → ["es", "es", "en"]
        const preferredLangs = acceptLang
            .split(",")
            .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));

        const prefersSpanish = preferredLangs.some((l) => ES_LOCALES.includes(l));

        if (!prefersSpanish) {
            return redirect("/en/", 302);
        }

        return next();
    }
);
