import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import { site } from '../siteInfo'

export default function About() {
  return (
    <section id="about" className="bg-mint py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            {/* Swap in a portrait: drop the files into public/images/ and
                pass src/srcSet from responsivePhoto() — see CLAUDE.md */}
            <div className="photo-frame rounded-blob aspect-[4/5]">
              <Photo alt="Portrait of the tutor" />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h2 className="section-heading mb-3">About</h2>
            <p className="section-sub mb-8">{site.practitioner}</p>
            <p className="lede mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="lede">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
