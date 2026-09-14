import { site } from '../siteInfo'
import { useLang } from '../i18n'
import Sprig from '../components/Sprig'
import Logo from '../components/Logo'

/**
 * A band like every other band: one flat tone, a curved seam below it, and
 * the page-level grain for texture. No photograph yet — <Photo> is ready for
 * one, but the opening reads better as type until the real photography
 * arrives.
 *
 * The page opens on `mint`, which is a light ground, so this section uses the
 * plain (dark-on-light) classes throughout. The wordmark is set in one
 * colour and one style — no italic, no second colour on "Riječ"; the size of
 * it is what makes it the loudest thing on the page.
 *
 * The three items under the buttons are the real service names, from the
 * dictionary; everything else in this section is still lorem.
 *
 * Laid out mobile-first: one left edge that every element lines up on, a
 * headline that wraps on its own below `sm`, and full-width stacked buttons
 * so nothing sits ragged on a phone.
 */
export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="home"
      className="hero-height bg-mint relative flex items-center pt-28 pb-16 sm:pt-36 sm:pb-28"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sprig className="w-5 h-5 text-dandelion-deep animate-sway" />
            <p className="label">{t.site.what}</p>
          </div>

          {/* The site name is the `h1` for the same reason it is the largest
              thing on the page: it names what this page is about. The line
              under it is a `p`. */}
          {/* The mark, then the name. The mark is the immortelle in outline
              and carries no words, so it carries no alt text either — the h1
              directly under it is what names the business. */}
          <Logo className="h-14 sm:h-20 w-auto text-pine mb-6 sm:mb-8" />

          <h1
            className="font-display text-pine text-balance leading-[1.1] tracking-[-0.015em] mb-5 sm:mb-6"
            style={{ fontSize: 'clamp(2.6rem, 8vw, 4.6rem)' }}
          >
            {site.nameFirst} &amp; {site.nameSecond}
          </h1>

          <p
            className="font-sans font-light text-ink-soft text-balance leading-[1.4] mb-7 sm:mb-8"
            style={{ fontSize: 'clamp(1.15rem, 2.8vw, 1.6rem)' }}
          >
            {t.hero.lede}
          </p>

          <p className="font-sans text-[17px] sm:text-xl text-ink-soft leading-[1.75] max-w-xl mb-9 sm:mb-10">
            {t.hero.body}
          </p>

          {/* Stacked and full-width on a phone, side by side from sm up */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 mb-11 sm:mb-14">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* One item per line on a phone, so the dots keep a single edge */}
          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {t.hero.offer.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-sans text-[14px] sm:text-[13px] text-ink-soft">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-dandelion shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint — a slow breath, not a bouncing arrow */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <span className="block w-px h-12 bg-gradient-to-b from-pine/40 to-transparent animate-breathe" />
      </div>
    </section>
  )
}
