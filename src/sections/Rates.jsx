import Reveal from '../components/Reveal'
import { useLang } from '../i18n'

// PLACEHOLDER PRICES. Every figure below is invented to show the layout —
// none of it has been agreed. See CLAUDE.md → "What's placeholder".
//
// Only the FIGURES are here. The names and the units are in src/i18n/, keyed
// by the same ids, because a price is the same number in both languages and
// "per 1,000 words" is not the same string.
const prices = {
  tutoring: '€00',
  lessons: '€00',
  editing: '€00',
  copywriting: '—',
}

export default function Rates() {
  const { t } = useLang()

  return (
    <section id="rates" className="bg-haze pt-24 sm:pt-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <h2 className="section-heading mb-3">{t.rates.heading}</h2>
            <p className="section-sub">{t.rates.sub}</p>
          </Reveal>

          <Reveal delay={110}>
            <div className="soft-card sm:p-10">
              <ul>
                {Object.entries(t.rates.items).map(([id, { name, unit }]) => (
                  <li
                    key={id}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 border-b border-line last:border-0"
                  >
                    <div>
                      <p className="font-display text-xl text-ink">{name}</p>
                      <p className="font-sans text-[13px] text-ink-soft/80">{unit}</p>
                    </div>
                    <p className="font-display text-2xl text-dandelion-deep">{prices[id]}</p>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[13px] text-ink-soft/80 leading-[1.8] mt-6">{t.rates.note}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
