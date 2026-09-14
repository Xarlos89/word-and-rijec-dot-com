import Reveal from '../components/Reveal'

// PLACEHOLDER. Nothing here is a real quote from a real student — replace the
// whole array before the site is published, or delete the section from
// App.jsx until there are real ones.
const quotes = [
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Student name', detail: 'Lorem ipsum' },
  { quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Student name', detail: 'Lorem ipsum' },
  { quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', name: 'Student name', detail: 'Lorem ipsum' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-mint py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading mb-3">Testimonials</h2>
            <p className="section-sub">In their own words</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {quotes.map(({ quote, name, detail }, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <figure className="soft-card h-full flex flex-col gap-5">
                <blockquote className="font-sans font-light text-[17px] text-ink-soft leading-[1.6]">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-auto font-sans text-[13px] text-ink-soft">
                  <span className="text-dandelion-deep font-bold">{name}</span> · {detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
