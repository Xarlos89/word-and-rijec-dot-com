// ─────────────────────────────────────────────────────────────
// PLACEHOLDER CONTACT DETAILS. Everything below the name is a
// stand-in and must be replaced before the site goes anywhere
// public — see CLAUDE.md → "What's placeholder".
//
// Every component reads from here, so one edit updates the whole
// page. (index.html keeps its own copy for <meta> tags and
// JSON-LD, and has to be edited alongside it.)
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Word & Riječ',
  // The two halves of the wordmark, joined by an ampersand. Neither half is
  // styled differently from the other — one colour, one weight, no italic.
  nameFirst: 'Word',
  nameSecond: 'Riječ',
  tagline: 'Lorem ipsum dolor sit amet',       // placeholder
  what: 'English and Croatian language services',
  practitioner: 'Placeholder Name',            // placeholder
  credentials: '',                             // e.g. 'MA, CELTA' — unknown

  // All placeholder.
  email: 'hello@example.com',
  emailHref: 'mailto:hello@example.com',
  phone: '',
  phoneHref: '',

  // Lessons are online for now; no address is published.
  location: 'Online, worldwide',

  // Drop a URL in and the footer picks the link up; empty means the icon is
  // not rendered at all.
  instagram: '',
  linkedin: '',

  // The canonical origin. index.html (canonical, og:url, JSON-LD),
  // public/sitemap.xml, public/404.html and public/CNAME all carry their own
  // copy of this — they are static files that cannot import it — so change
  // them together. See CLAUDE.md → Deployment.
  url: 'https://word-and-rijec.com/',
}
