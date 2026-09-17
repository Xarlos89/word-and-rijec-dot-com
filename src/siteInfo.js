// ─────────────────────────────────────────────────────────────
// CONTACT DETAILS. The name, practitioner, email and URL are real;
// the rest (credentials, phone, socials) is still unknown and is
// left empty — see CLAUDE.md → "What's placeholder".
//
// Every component reads from here, so one edit updates the whole
// page.
//
// LANGUAGE-INDEPENDENT FACTS ONLY. The site is built in English
// and Croatian, so anything that reads differently in the two —
// the tagline, what the business does, where it works — lives in
// src/i18n/en.js and hr.js under `site`, not here. What stays
// here is what is the same on both pages: the name, the email,
// the phone number and the canonical origin.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Word & Riječ',
  // The two halves of the wordmark, joined by an ampersand. Neither half is
  // styled differently from the other — one colour, one weight, no italic.
  nameFirst: 'Word',
  nameSecond: 'Riječ',
  practitioner: 'Rebekah Berković',
  credentials: '',                             // e.g. 'MA, CELTA' — unknown

  // Her real address. The contact form posts to FormSubmit with this address
  // too — see src/sections/Contact.jsx.
  email: 'rebekahberkovic@gmail.com',
  emailHref: 'mailto:rebekahberkovic@gmail.com',
  // Placeholder — unknown.
  phone: '',
  phoneHref: '',

  // Drop a URL in and the footer picks the link up; empty means the icon is
  // not rendered at all.
  instagram: '',
  linkedin: '',

  // The canonical origin. src/components/Seo.jsx derives the canonical,
  // og:url, hreflang and JSON-LD URLs from this, so index.html no longer
  // carries a copy. public/sitemap.xml, public/404.html and public/CNAME
  // still do — they are static files that cannot import it — so change those
  // together. See CLAUDE.md → Deployment.
  url: 'https://word-and-rijec.com/',
}
