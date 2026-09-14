import Reveal from '../components/Reveal'

// PLACEHOLDER PRICES. Every figure below is invented to show the layout —
// none of it has been agreed. See CLAUDE.md → "What's placeholder".
const rates = [
  { name: 'Tutoring', unit: 'per 60 minutes', price: '€00' },
  { name: 'Language lesson', unit: 'per 60 minutes', price: '€00' },
  { name: 'Editing & proofreading', unit: 'per 1,000 words', price: '€00' },
  { name: 'Copywriting', unit: 'quoted per project', price: '—' },
]

export default function Rates() {
  return (
    <section id="rates" className="bg-haze pt-24 sm:pt-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <h2 className="section-heading mb-3">Rates</h2>
            <p className="section-sub">What things cost</p>
          </Reveal>

          <Reveal delay={110}>
            <div className="soft-card sm:p-10">
              <ul>
                {rates.map(({ name, unit, price }) => (
                  <li
                    key={name}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 border-b border-line last:border-0"
                  >
                    <div>
                      <p className="font-display text-xl text-ink">{name}</p>
                      <p className="font-sans text-[13px] text-ink-soft/80">{unit}</p>
                    </div>
                    <p className="font-display text-2xl text-dandelion-deep">{price}</p>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[13px] text-ink-soft/80 leading-[1.8] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
