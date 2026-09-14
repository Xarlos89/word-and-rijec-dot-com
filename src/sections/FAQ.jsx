import { useState } from 'react'
import Reveal from '../components/Reveal'

// Placeholder questions and answers — the questions are the ones a language
// service is usually asked, the answers are lorem.
const faqs = [
  { q: 'Lorem ipsum dolor sit amet?', a: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.' },
  { q: 'Do you teach online or in person?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { q: 'How long is a lesson?', a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { q: 'What level do I need to start?', a: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { q: 'How quickly can you turn around editing work?', a: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.' },
  { q: 'What happens if I need to cancel?', a: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-display text-lg sm:text-xl text-ink leading-snug group-hover:text-pine transition-colors duration-300">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center transition-transform duration-500 ease-out ${
            open ? 'rotate-45 bg-dandelion/50 border-dandelion-deep' : ''
          }`}
        >
          <svg className="w-3.5 h-3.5 text-ink-soft" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-sans text-[15px] text-ink-soft leading-[1.85] pb-7 pr-12 -mt-1 max-w-2xl">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-haze py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <h2 className="section-heading mb-3">FAQ</h2>
            <p className="section-sub">Good to know</p>
          </Reveal>

          <Reveal delay={110}>
            <div>
              {faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
