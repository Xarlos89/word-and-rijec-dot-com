import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import { site } from '../siteInfo'
import { useLang } from '../i18n'

export default function About() {
  const { t, responsivePhoto } = useLang()
  // Cropped to the frame's 4:5 from the original upload, which is 830px wide
  const portrait = responsivePhoto('rebekah-berkovic', [400, 600, 830])

  return (
    <section id="about" className="bg-mint py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* The text runs long, so the portrait holds its place beside it */}
          <Reveal className="lg:sticky lg:top-28">
            {/* responsivePhoto() comes off useLang() — the bound one, so the
                path is right under /hr/ too. See src/images.js. */}
            <div className="photo-frame rounded-blob aspect-[4/5]">
              <Photo
                {...portrait}
                sizes="(min-width: 1024px) 400px, calc(100vw - 48px)"
                width={830}
                height={1038}
                alt={t.about.photoAlt}
              />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h2 className="section-heading mb-3">{t.about.heading}</h2>
            <p className="section-sub mb-8">{site.practitioner}</p>
            <div className="space-y-5">
              {t.about.body.map((para) => (
                <p key={para} className="lede">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
