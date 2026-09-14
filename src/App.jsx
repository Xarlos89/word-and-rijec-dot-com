import { useEffect } from 'react'
import { LangProvider } from './i18n'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Approach from './sections/Approach'
import Testimonials from './sections/Testimonials'
import Rates from './sections/Rates'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

/**
 * The page is built from colour BANDS, not alternating slabs.
 * Sections inside a band share a background and simply continue; bands are
 * joined by a <Divider> curve. See CLAUDE.md → "Bands and seams".
 *
 * `lang` comes from the ROUTE, not from state — src/routes.jsx mounts this
 * once per language and vite-react-ssg prerenders each to its own HTML file
 * (/ and /hr/). So there is no toggle, no localStorage and nothing that can
 * differ between the prerendered markup and the first client render. See
 * CLAUDE.md → "Two languages".
 */
export default function App({ lang }) {
  useEffect(() => {
    // Enables the scroll-reveal styles only once JS is running, so the
    // prerendered page is never left invisible.
    document.documentElement.classList.add('reveal-ready')
  }, [])

  return (
    <LangProvider lang={lang}>
      <Seo />
      <Navbar />
      <main>
        {/* The page is two light bands and nothing else: mint, haze, mint,
            haze, mint, haze — and the footer closes it back on mint, so the
            alternation runs unbroken from the hero to the bottom of the page.
            `pine` is not a background anywhere; it is a type colour only.
            If you add a section, it takes the colour the alternation gives
            it; do not introduce a third ground to make one stand out.

            Each <Divider> is a line of immortelle sprigs in the NEXT band's
            colour, growing up into this one — so `from`/`to` must match their
            neighbours or the flowers come out the wrong colour. */}
        <Hero />
        <Divider from="mint" to="haze" shape="meadow" />

        <Services />
        <Divider from="haze" to="mint" shape="drift" />

        <About />
        <Divider from="mint" to="haze" shape="verge" />

        <Approach />
        <Divider from="haze" to="mint" shape="sparse" />

        <Testimonials />
        <Divider from="mint" to="haze" shape="verge" />

        {/* Rates, FAQ and Contact share the closing haze band — rates once
            everything else has been read, then the questions, then the ask */}
        <Rates />
        <FAQ />
        <Contact />
        <Divider from="haze" to="mint" shape="meadow" />
      </main>
      <Footer />
    </LangProvider>
  )
}
