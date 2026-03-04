import { d as defineMiddleware, s as sequence } from './chunks/index_baUDnsig.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Bjb5op64.mjs';
import 'cookie';

const ES_LOCALES = ["es", "ca", "gl", "eu"];
const onRequest$1 = defineMiddleware(
  ({ request, cookies, redirect }, next) => {
    const url = new URL(request.url);
    if (url.pathname !== "/") return next();
    if (cookies.get("lang-redirected")?.value === "1") return next();
    const acceptLang = request.headers.get("accept-language") ?? "";
    const preferredLangs = acceptLang.split(",").map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));
    const prefersSpanish = preferredLangs.some((l) => ES_LOCALES.includes(l));
    if (!prefersSpanish) {
      return redirect("/en/", 302);
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
