import Reveal from '../components/Reveal'

// Placeholder steps. The shape of the section — three numbered steps — is the
// point; the words are lorem.
const steps = [
  { n: '01', title: 'Lorem ipsum', body: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
  { n: '02', title: 'Dolor sit amet', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { n: '03', title: 'Consectetur elit', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-haze py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading mb-3">How it works</h2>
            <p className="section-sub">From first message to first lesson</p>
          </div>
        </Reveal>

        <ol className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ n, title, body }, i) => (
            <Reveal key={n} delay={i * 90} className="h-full">
              <li className="h-full flex flex-col gap-3 pt-6 border-t border-line">
                <span className="font-display text-3xl text-dandelion-deep leading-none">{n}</span>
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
