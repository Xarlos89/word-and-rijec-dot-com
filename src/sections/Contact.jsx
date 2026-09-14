import Reveal from '../components/Reveal'
import Sprig from '../components/Sprig'
import { site } from '../siteInfo'

/**
 * The closing call to action. There is no form — a form needs a backend, and
 * this is a static build; email is the only channel until that changes.
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-haze pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="soft-card sm:p-14 text-center flex flex-col items-center">
            <Sprig className="w-6 h-6 text-dandelion-deep mb-6 animate-sway" />
            <h2 className="section-heading mb-4">Get in touch</h2>
            <p className="lede max-w-xl mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a href={site.emailHref} className="btn-primary w-full sm:w-auto">
                {site.email}
              </a>
              {site.phone && (
                <a href={site.phoneHref} className="btn-ghost w-full sm:w-auto">
                  {site.phone}
                </a>
              )}
            </div>
            <p className="font-sans text-[13px] text-ink-soft/80 mt-7">{site.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
