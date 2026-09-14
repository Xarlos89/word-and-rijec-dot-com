import { site } from '../siteInfo'
import Logo from './Logo'

const explore = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How it works', href: '#approach' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Rates', href: '#rates' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get in touch', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-pine text-cloud/80 font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-14 grid sm:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <Logo className="h-8 w-auto text-dandelion shrink-0" />
            <span className="font-display text-cloud text-xl">
              {site.nameFirst} &amp; {site.nameSecond}
            </span>
          </div>
          <p className="font-sans font-light text-[15px] text-cloud/75 mb-4">{site.tagline}</p>
          <p className="text-[14px] leading-[1.8] text-cloud/80 max-w-xs">
            {site.what}. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div>
          <div className="label-light mb-5">Explore</div>
          <nav className="flex flex-col gap-2.5 text-[14px] text-cloud/80">
            {explore.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-cloud transition-colors duration-300 w-fit">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="label-light mb-5">Get in touch</div>
          <ul className="text-[14px] space-y-2.5 text-cloud/80">
            <li>
              <a href={site.emailHref} className="hover:text-cloud transition-colors duration-300">
                {site.email}
              </a>
            </li>
            {/* Rendered only once a real number is in siteInfo.js */}
            {site.phone && (
              <li>
                <a href={site.phoneHref} className="hover:text-cloud transition-colors duration-300">
                  {site.phone}
                </a>
              </li>
            )}
            <li className="pt-2 leading-[1.8] text-cloud/75">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cloud/20 max-w-5xl mx-auto px-6 sm:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <p className="text-[12px] text-cloud/75">
          © {new Date().getFullYear()} {site.name}.
        </p>
        <p className="text-[12px] text-cloud/75">{site.what}.</p>
      </div>
    </footer>
  )
}
