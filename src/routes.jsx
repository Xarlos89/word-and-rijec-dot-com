import App from './App.jsx'
import { LANGS, localePath } from './i18n/locales'

/**
 * One route per language, each prerendered to its own static HTML file:
 *
 *   /        dist/index.html      English
 *   /hr/     dist/hr/index.html   Croatian
 *
 * There is a router now, where CLAUDE.md once said there was not, and it
 * exists only to give vite-react-ssg two paths to walk. Nothing navigates
 * through it at runtime: every in-page link is a fragment (#services), and
 * the language switcher is a plain <a> that loads the other document. The
 * router is a build-time list, not a client-side feature.
 *
 * `dirStyle: 'nested'` in vite.config.js is what turns the 'hr' path into
 * hr/index.html rather than hr.html, so the Croatian page answers on the
 * directory URL with its trailing slash — which is what the canonical, the
 * hreflang and the sitemap all say.
 *
 * Adding a language means: a dictionary in src/i18n/, an entry in LANGS and
 * the three tables in src/i18n/locales.js, and a <url> in public/sitemap.xml.
 * The route below is generated, so it needs nothing.
 */
export const routes = LANGS.map((lang) => ({
  // react-router wants the root as '/' and everything else without the
  // leading slash; localePath has the canonical form with both slashes.
  path: lang === 'en' ? '/' : localePath[lang].replace(/^\/|\/$/g, ''),
  element: <App lang={lang} />,
}))
