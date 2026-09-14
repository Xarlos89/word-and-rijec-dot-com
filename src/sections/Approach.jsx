import Reveal from '../components/Reveal'
import { useLang } from '../i18n'

// The step NUMERALS are presentation, not content, so they stay here; the
// titles and bodies come from src/i18n/ and are both still lorem.
const numerals = ['01', '02', '03']

export default function Approach() {
  const { t } = useLang()

  return (
    <section id="approach" className="bg-haze py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading mb-3">{t.approach.heading}</h2>
            <p className="section-sub">{t.approach.sub}</p>
          </div>
        </Reveal>

        <ol className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {t.approach.steps.map(({ title, body }, i) => (
            <Reveal key={numerals[i]} delay={i * 90} className="h-full">
              <li className="h-full flex flex-col gap-3 pt-6 border-t border-line">
                <span className="font-display text-3xl text-dandelion-deep leading-none">{numerals[i]}</span>
                <h3 className="font-display text-xl text-ink">{title}</h3>
                <p className="font-sans text-[15px] text-ink-soft leading-[1.8]">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
