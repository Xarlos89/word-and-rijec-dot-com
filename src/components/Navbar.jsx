import { site } from '../siteInfo'
import { useLang } from '../i18n'
import Logo from './Logo'
import LangSwitch from './LangSwitch'

// Services carries a submenu: the four things offered, each of which is a
// card inside the Services section rather than a section of its own.
// The hrefs are fragments, so they are correct on both language pages; only
// the labels come from the dictionary.
function navLinksFor(t) {
  return [
    {
      label: t.nav.services,
      href: '#services',
      children: [
        { label: t.nav.submenu.tutoring, href: '#services' },
        { label: t.nav.submenu.lessons, href: '#services' },
        { label: t.nav.submenu.editing, href: '#services' },
        { label: t.nav.submenu.copywriting, href: '#services' },
      ],
    },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.approach, href: '#approach' },
    { label: t.nav.rates, href: '#rates' },
    { label: t.nav.faq, href: '#faq' },
  ]
}

const linkClasses =
  'font-sans text-[14px] text-ink-soft hover:text-pine transition-colors duration-300'

/**
 * Fixed at the top of the page from the first pixel, floating over the bands
 * as a translucent pill rather than a bar across the page.
 *
 * The Services submenu opens on hover and on focus-within, so it is reachable
 * by keyboard. Below `md` the links are hidden entirely and the pill keeps
 * only the wordmark, the language switcher and the contact button — there is
 * no mobile drawer yet; see CLAUDE.md → "What's placeholder". The switcher
 * stays visible at every width because it is the only way to reach the other
 * language, and hiding it would strand a Croatian visitor on the English page.
 */
export default function Navbar() {
  const { t } = useLang()
  const navLinks = navLinksFor(t)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-3 sm:pt-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4 rounded-full bg-cloud/85 backdrop-blur-md shadow-lift px-4 sm:px-5 lg:px-7 h-14">
          <a
            href="#home"
            aria-label={site.name}
            className="flex items-center gap-2.5 shrink-0 whitespace-nowrap"
          >
            <Logo className="h-7 w-auto text-pine shrink-0" />
            {/* One colour, one style. The client asked for the wordmark to
                read as a single word-group, so "Riječ" is neither italic nor
                a second colour. The wordmark is the business name and is NOT
                translated — it reads the same on both language pages.

                Hidden below `sm`: the pill has to hold the mark, the language
                switcher and the contact button on a 320px phone, and the
                wordmark is the only one of the four that repeats — the h1 a
                few pixels further down says it at full size. The flower mark
                carries the brand on its own, which is the point of it being a
                flower rather than lettering. The aria-label above keeps the
                link named once the text is gone. */}
            <span className="hidden sm:inline font-display text-[19px] text-pine leading-none">
              {site.nameFirst} &amp; {site.nameSecond}
            </span>
          </a>

          {/* gap-4 until `lg`, not gap-7: the Croatian labels are longer than
              the English ones ("Kako to funkcionira" against "How it works"),
              and at exactly 768px the full set plus the switcher and the
              button overruns the pill. The wider gap comes back at lg. */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7">
            {navLinks.map(({ label, href, children }) =>
              children ? (
                <div key={label} className="relative group">
                  <a
                    href={href}
                    aria-haspopup="true"
                    className={`${linkClasses} inline-flex items-center gap-1.5`}
                  >
                    {label}
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </a>

                  {/* Sits in the gap under the pill; the padded wrapper keeps
                      the pointer inside the group on the way down */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-5 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                    <ul className="min-w-[12rem] rounded-3xl bg-cloud shadow-lift py-3">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-6 py-2 font-sans text-[14px] text-ink-soft hover:text-pine transition-colors duration-300"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a key={href} href={href} className={linkClasses}>
                  {label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LangSwitch />
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-dandelion text-ink font-sans font-bold text-[14px] px-5 py-2.5 border border-dandelion-deep shadow-soft transition-colors duration-500 hover:bg-dandelion-deep hover:text-cloud"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
