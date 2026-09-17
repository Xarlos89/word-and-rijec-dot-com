import Reveal from '../components/Reveal'
import Sprig from '../components/Sprig'
import { site } from '../siteInfo'
import { useLang } from '../i18n'
import { localePath } from '../i18n/locales'

/**
 * The closing call to action: a short form, with email as the fallback.
 *
 * The site is static, so the form posts natively to FormSubmit, which
 * forwards each submission to `site.email`. No JavaScript is involved — it
 * works on the prerendered page as-is. The very first submission makes
 * FormSubmit send an activation email to that address; nothing is delivered
 * until she clicks it. See CLAUDE.md → "The contact form".
 *
 * `_next` sends the visitor back to this same page in the same language.
 * It has to be absolute, which is why it is built from `site.url`.
 */
export default function Contact() {
  const { t, lang } = useLang()
  const next = new URL(`${localePath[lang].replace(/^\//, '')}#contact`, site.url).href

  return (
    <section id="contact" className="bg-haze pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="soft-card sm:p-14 text-center flex flex-col items-center">
            <Sprig className="w-6 h-6 text-dandelion-deep mb-6 animate-sway" />
            <h2 className="section-heading mb-4">{t.contact.heading}</h2>
            <p className="lede max-w-xl mb-9">{t.contact.body}</p>

            <form
              action={`https://formsubmit.co/${site.email}`}
              method="POST"
              className="w-full max-w-xl text-left space-y-5"
            >
              <input type="hidden" name="_subject" value={t.contact.form.subject} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={next} />
              {/* Honeypot: hidden from people, filled in by bots, and
                  FormSubmit drops any submission that has it set. */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="contact-name" className="label block mb-2">
                  {t.contact.form.name}
                </label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required className="form-field" />
              </div>
              <div>
                <label htmlFor="contact-email" className="label block mb-2">
                  {t.contact.form.email}
                </label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required className="form-field" />
              </div>
              <div>
                <label htmlFor="contact-message" className="label block mb-2">
                  {t.contact.form.message}
                </label>
                <textarea id="contact-message" name="message" rows={5} required className="form-field resize-y" />
              </div>
              <div className="pt-2 text-center">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {t.contact.form.send}
                </button>
              </div>
            </form>

            <p className="font-sans text-[14px] text-ink-soft mt-8">
              {t.contact.orEmail}:{' '}
              <a href={site.emailHref} className="text-pine underline underline-offset-4 hover:text-dandelion-deep transition-colors duration-300">
                {site.email}
              </a>
              {site.phone && (
                <>
                  {' · '}
                  <a href={site.phoneHref} className="text-pine underline underline-offset-4 hover:text-dandelion-deep transition-colors duration-300">
                    {site.phone}
                  </a>
                </>
              )}
            </p>
            <p className="font-sans text-[13px] text-ink-soft/80 mt-3">{t.site.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
