import { defineMiddleware } from "astro:middleware";

// All locales where Spanish (or closely related) is native — no redirect for these
const ES_LOCALES = ["es", "ca", "gl", "eu"];

export const onRequest = defineMiddleware(
    ({ request, cookies, redirect }, next) => {
        const url = new URL(request.url);
        console.log("Middleware running for:", url.href);

        // Only redirect on the root path (ES default, prefixDefaultLocale: false)
        if (url.pathname !== "/") {
            console.log("Not root path, skipping");
            return next();
        }

        // Respect user's explicit language choice (set by LanguageSwitcher)
        if (cookies.get("lang-redirected")?.value === "1") {
            console.log("Found cookie lang-redirected=1, skipping");
            return next();
        }

        const acceptLang = request.headers.get("accept-language") ?? "";

        // If no accept-language header is present (e.g. during SSG build or bots),
        // default to Spanish instead of redirecting.
        if (!acceptLang) {
            console.log("No Accept-Language header, serving / (default es)");
            return next();
        }

        // Parse "es-VE,es;q=0.9,en;q=0.8" → ["es", "es", "en"]
        const preferredLangs = acceptLang
            .split(",")
            .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));

        const prefersSpanish = preferredLangs.some((l) => ES_LOCALES.includes(l));

        if (!prefersSpanish) {
            console.log("No spanish found in Accept-Language, redirecting to /en/");
            return new Response(null, {
                status: 302,
                headers: {
                    Location: "/en/",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                },
            });
        }

        console.log("Spanish preferred, serving /");
        return next();
    }
);
