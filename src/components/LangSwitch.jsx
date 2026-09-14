import { useLang } from '../i18n'
import { localeLabel, localeTag } from '../i18n/locales'

/**
 * The language switcher: a single compact link to the other language.
 *
 * It shows the language it switches TO ("HR" on the English page), which is
 * the pattern that survives a narrow navbar — a full EN|HR pair does not fit
 * beside the wordmark and the contact button on a phone, and the switcher is
 * the one control that must not be hidden below `md` the way the nav links
 * are (see CLAUDE.md → "What's placeholder", no mobile nav yet).
 *
 * It is a plain <a>, not a router <Link>, on purpose: changing language is a
 * change of document, and a full navigation is what gets the right
 * prerendered HTML, the right `lang` attribute and the right canonical. The
 * href is document-relative for the same reason `base` is — see
 * src/i18n/locales.js → localeHref.
 *
 * `lang` and `hrefLang` are both set so a screen reader announces "HR" in
 * Croatian rather than spelling it out in English.
 */
export default function LangSwitch({ className = '' }) {
  const { t, other, otherHref } = useLang()

  return (
    <a
      href={otherHref}
      lang={localeTag[other]}
      hrefLang={localeTag[other]}
      aria-label={t.switcher.aria}
      className={`inline-flex items-center rounded-full border border-line px-2.5 py-1 font-sans text-[12px] font-bold tracking-[0.12em] uppercase text-ink-soft transition-colors duration-300 hover:text-pine hover:border-pine ${className}`}
    >
      {localeLabel[other]}
    </a>
  )
}
