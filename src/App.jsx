import { useEffect } from 'react'
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
 */
export default function App() {
  useEffect(() => {
    // Enables the scroll-reveal styles only once JS is running, so the
    // prerendered page is never left invisible.
    document.documentElement.classList.add('reveal-ready')
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* The body of the page is two light bands and nothing else: mint,
            haze, mint, haze, mint, haze. `pine` is not in the rotation — it
            belongs to the footer, which is the one dark surface on the site.
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
        <Divider from="haze" to="pine" shape="meadow" />
      </main>
      <Footer />
    </>
  )
}
