import Reveal from '../components/Reveal'

// The four services are real — they are what the business does. Every
// description is lorem until she writes her own.
const services = [
  {
    title: 'Tutoring',
    for: 'School and university students',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7.5L12 4l8.5 3.5L12 11 3.5 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 9.4V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.4M20.5 7.5v5" />
      </svg>
    ),
  },
  {
    title: 'Language lessons',
    for: 'English and Croatian, any level',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.4-3.4-8.5S9.8 5.9 12 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Editing & proofreading',
    for: 'Theses, articles, manuscripts',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.8 4.6l3.6 3.6M4 20l1-4.2L16.2 4.6a1.4 1.4 0 012 0l1.2 1.2a1.4 1.4 0 010 2L8.2 19z" />
      </svg>
    ),
  },
  {
    title: 'Copywriting',
    for: 'Websites, brochures, campaigns',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5h8.5L19 8v12.5H6V3.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3.5V8h5M9 12.5h6M9 16h4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-haze py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading mb-3">Services</h2>
            <p className="section-sub mb-7">What I can help with</p>
            <p className="lede">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map(({ title, for: audience, body, icon }, i) => (
            <Reveal key={title} delay={(i % 2) * 90} className="h-full">
              <article className="soft-card h-full flex flex-col gap-4">
                <span className="text-pine">{icon}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-snug">{title}</h3>
                  <p className="font-sans text-[13px] text-ink-soft/80 mt-1">{audience}</p>
                </div>
                <p className="font-sans text-[15px] text-ink-soft leading-[1.8]">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
