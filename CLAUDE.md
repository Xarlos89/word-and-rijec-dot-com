# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A one-page static marketing site for **Word and Riječ**, a language-services business offering tutoring,
language lessons, editing, proofreading and copywriting in English and Croatian.

It is currently a **template**: the structure, the design system and the deploy pipeline are real, and
essentially all of the copy is lorem ipsum. Nothing on the page has been confirmed by the client. See
"What's placeholder" at the bottom — read that section before writing any content.

The site is a sibling of `../guy-catz-dot-com` and `../veli-bol-home` and shares their stack and
conventions; when something here is unclear, those are the reference implementations.

## Commands

```bash
npm install
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # prerender to dist/ via vite-react-ssg
npm run preview  # serve the built dist/ locally
```

There is no test suite, no linter and no typechecker. `npm run build` is the only gate — it prerenders the
page, so a runtime error in a component fails the build rather than appearing in the browser.

Two optional Python helpers, neither wired into the build:

```bash
pip install cairosvg Pillow && python3 scripts/build-icons.py   # PNG icons from public/favicon.svg
pip install fonttools brotli && python3 scripts/trim-fonts.py   # narrow the fonts' weight axes in place
```

## Stack

- **React 18**, function components only, no state management beyond `useState` in one FAQ accordion.
- **Vite 5** with `base: './'`. See Deployment — the relative base is load-bearing.
- **vite-react-ssg** (`/single-page` entry) prerenders `App` to static HTML at build time. `src/main.jsx`
  exports `createRoot`; there is no `ReactDOM.render` call anywhere.
- **Tailwind 3**, configured in `tailwind.config.js`, with a handful of component classes in
  `src/index.css`. No CSS modules, no styled-components, no Tailwind plugins.
- No router, no forms, no backend, no analytics.

## Project layout

```
index.html              <head>: meta, Open Graph, JSON-LD, font preloads. Hand-maintained.
src/
  main.jsx              vite-react-ssg entry
  App.jsx               the whole page — the band order lives here
  index.css             @font-face blocks, base layer, component classes
  siteInfo.js           name, contact details, URL — every component reads from here
  palette.js            the two band colours as hex, for <Divider>'s inline SVG
  images.js             asset() and responsivePhoto() — the ONLY way to reference public/
  components/           Navbar, Footer, Divider, Reveal, Photo, Sprig
  sections/             one file per section, in page order
public/                 copied verbatim into dist/ — fonts, favicon, robots, sitemap, 404, manifest
scripts/                Python one-offs, run by hand
.github/workflows/      deploy.yml — build and publish to GitHub Pages on push to main
```

## Bands and seams

The page is **two light grounds that simply alternate**: `mint`, `haze`, `mint`, `haze`… and nothing else,
from the hero through to the footer. **`pine` is not a background anywhere** — it is a type colour only.
Where the colour changes, a `<Divider>` grows the next band into the one above it.

`App.jsx` is the only place the order is visible, and the `<Divider from= to=>` pairs must match their
neighbours exactly: `from` is the colour of the section above, `to` the colour below. **Adding or
reordering a section means re-pairing every divider around it**, or a hard edge of the wrong colour appears
in the seam.

| Band | Colour | Sections |
| --- | --- | --- |
| A | `mint` | Hero |
| B | `haze` | Services |
| C | `mint` | About |
| D | `haze` | Approach ("How it works") |
| E | `mint` | Testimonials |
| F | `haze` | Rates, FAQ, Contact |
| G | `mint` | Footer — the alternation closes on it rather than dropping to a dark slab |

A new section takes whatever colour the alternation gives it. **Do not introduce a third ground to make one
section stand out.** Two earlier drafts tried it — Testimonials on `pine`, then the footer on `pine` — and
both read as a random green slab interrupting the page. Emphasis comes from the cards and the dandelion
button, not from a new background.

### The seams are immortelle flowers

A `<Divider>` is not a wave any more. It draws a soft ground line with **immortelle sprigs growing up out
of it** — and the ground *and* the flowers are painted in the colour of the section **below**, over a
background of the section **above**. The next band does not begin at an edge; it grows into the one before
it, and a few stems reach further up than the rest.

Two consequences:

- **`from` and `to` must match their neighbours** or the flowers come out the wrong colour, which is far
  more obvious than a mismatched wave was.
- **The band colours have to stay apart in value.** The flowers are only visible because `mint` and `haze`
  differ; at 1.41:1 they are a gentle step, and that is close to the floor. This is why `haze` was darkened
  to `#A7B0AA` when `mint` went green — the requested mint against the old grey was 1.19:1, at which point
  the seam and every flower in it disappears. If you change either band, re-check this first.

Four seam variants (`meadow`, `drift`, `verge`, `sparse`) differ in how the sprigs are scattered; pick so
that two adjacent seams are not identical. The geometry is **hard-coded, not random** — the page is
prerendered, so a random layout would differ between the static HTML and the first client render and React
would throw a hydration mismatch.

They are not free: the four seam definitions carry ~200 circles, and the built page inlines 333 of them
(~60KB raw, ~10KB gzipped). That is the budget already spent — if you add sprigs, take some out elsewhere.

### There is no light-on-dark surface at all

Every `-light` class is gone from `src/index.css` — `.label-light` was the last, and it went when the
footer moved onto `mint`. So did `.section-heading-light`, `.section-sub-light`, `.lede-light`,
`.btn-primary-light`, `.btn-ghost-light` and `.soft-card-dark`, deleted rather than left as dead CSS.

**If you ever add a dark section, that whole set has to come back with it** — light-band type is unreadable
on `pine`, and nothing in the stylesheet will warn you.

`<Photo tone="dark">` and the `pine-light` token survive for that eventuality; nothing currently uses
either. The one remaining dark surface on the whole project is `public/404.html`, which is a standalone
page with its own inline styles and is not part of this system.

## Design tokens (tailwind.config.js)

The brief was, in the client's words, *immortelle flowers on a seaside walk by pine trees next to the
ocean*. Every colour is one of those four things, which is also the quickest way to judge a proposed
addition: if it is not the water, the stone, the trees or the flower, it does not go in.

| token | hex | what it is |
| --- | --- | --- |
| `mint` | `#B8D6B2` | the meadow. Mint green — the page's signature colour |
| `haze` | `#A7B0AA` | sun-bleached limestone. The grey band |
| `pine` | `#24463C` | the trees. The footer, and heading and label type on the light bands |
| `pine-light` | `#33594D` | dark `<Photo>` placeholders only; nothing uses it now |
| `cloud` | `#F4F5F1` | cards, the navbar pill, ghost buttons, and the text colour on `pine`. **Never a section background.** |
| `dandelion` | `#EDD382` | the immortelle bloom. A pastel yellow; the primary button — a ground for `ink` type (9.7:1) |
| `dandelion-deep` | `#6E540A` | the only yellow that can be type on a light ground: prices, the Approach numerals, the button's ring and its hover fill |
| `ink` / `ink-soft` | `#212D27` / `#333F38` | body type on the light bands |
| `line` | `#74837C` | hairlines and ghost-button borders |

Contrast was computed, not eyeballed. Everything used for type clears AA: ink/mint 9.1, ink/haze 6.4,
ink-soft/mint 7.0, ink-soft/haze 4.94, pine/mint 6.6, pine/haze 4.68, cloud/pine 9.5, ink/dandelion 9.7,
cloud/dandelion-deep 6.5, dandelion-deep/cloud 6.5, dandelion/pine 7.1.

Four things the numbers catch and the eye does not:

- **The primary button carries a `dandelion-deep` ring, and it is not decoration.** The yellow is close to
  the value of both bands — 1.1:1 on `mint`, 1.5:1 on `haze` — so a bare pill would have almost no boundary
  at all. The ring is 3.2:1 on `haze` and 4.5:1 on `mint`, clearing the WCAG 1.4.11 threshold for a
  control's edge. Do not remove it. (`dandelion-deep` was darkened from a first pick specifically to clear
  3:1 on `haze`, and it has no headroom left — it is the one token here that must not drift lighter.)
- **The button's hover flips the type to `cloud`.** `ink` on `dandelion-deep` fails badly; the fill and the
  text colour have to change together.
- **`dandelion` is a ground, never type on a light band.** Where the yellow appears as type — the prices,
  the big Approach numerals, a testimonial's name — it is `dandelion-deep`. Because every use of it is a
  ground, the bloom is safe to soften further (paler only raises the contrast of the `ink` on it) but not
  to brighten past its original `#F0C93E`; `deep` cannot move at all, see the ring above.
- **A `cloud` card on the `mint` band is only 1.44:1 against it.** The shadow is most of what says the card
  is raised, which is why `soft`/`lift`/`deep` carry real weight here. Do not lighten them.

**If you introduce a colour, compute the ratio before using it for type** — this palette is soft enough
that a plausible-looking new tone will usually fail.

Radii are `rounded-soft` (1.75rem) and `rounded-blob` (2.5rem). Nothing on the page is square-cornered and
nothing uses a default Tailwind shadow.

### Type

**Valley Sans** (`font-display`) for anything display-sized, **Nunito** (`font-sans`) for body and UI. Both
self-hosted from Google Fonts.

**Valley Sans ships as one static weight (400), with no italic and no other cut.** That is the single most
important thing to know about it:

- Never put `font-medium`, `font-semibold`, `font-bold` or `italic` on display type. The browser will
  synthesise the shape, and on this face it is visibly wrong. `font-normal` is the only weight utility
  allowed on `.font-display`.
- Emphasis in the display register comes from **size and colour only**. Anything that genuinely has to get
  bolder — the spaced-caps `.label`, button text — is body type, set in Nunito, which has real weights.
- `scripts/trim-fonts.py` cannot touch it. There are no axes to trim; the script covers Nunito only.

**Its W comes to a point.** An earlier round of this design treated a rounded W bottom as a hard
requirement and the face was picked on that basis; choosing Valley Sans set that requirement aside. If it
ever comes back, the faces that satisfy both a rounded W *and* full Croatian coverage are **Baloo 2**,
**Dosis** and **Varela Round** — checked by extracting the `W` outline and the `cmap` from each candidate,
not from a specimen page. Quicksand, Comfortaa, Nunito and M PLUS Rounded 1c all point the W. Fredoka and
Sniglet have a rounded W and **no `č`, `ć` or `đ`**, so they cannot set this site's own name.

Other rules:

- **No italic anywhere**, for the reason above. `.section-sub`, the footer tagline and the testimonial
  quotes are set in Nunito Light at a larger size instead.
- The wordmark is **"Word & Riječ"** — an ampersand, not "and" — set in one colour and one weight, with no
  styling on either half. It appears in three places (`Hero`, `Navbar`, `Footer`) and they must agree; all
  three read `nameFirst`/`nameSecond` from `src/siteInfo.js` and put the `&amp;` between them.

Section headings pair a short noun (`Services`, `Rates`, `FAQ`) with a lighter descriptive line beneath it
(`.section-sub`), never the other way round. That second line is set in Nunito, not Valley Sans — a second
display size under a display heading reads as a heading that failed to commit.

### The logo

`src/components/Logo.jsx` is the brand mark: **a single immortelle flower in outline** — one slender stem,
two needle leaves, and the flat-topped umbel of four buttons that grows along every section seam. Portrait,
`64×80`, drawn in open line with round caps and no fills.

**The mark carries no lettering.** An earlier round drew the word "word" as one unbroken cursive line ending
in the umbel; it was replaced by the flower alone. The wordmark text sits next to the mark at all three call
sites and already says the name, so the mark does not repeat it — which is also why it is `aria-hidden`
unless given a `title`.

- **Outline, not silhouette.** The buttons are hollow rings. That is the entire difference between `<Logo>`
  and `<Sprig>`, and it is why the two are not interchangeable.
- `src/components/Sprig.jsx` is the small-size form — same flower, **solid** buttons — for 16px slots, the
  `<Photo>` empty state and the favicon. Below about 24px a ring closes up into a dot, so anything that
  small takes `<Sprig>`. `public/favicon.svg` is the same solid drawing, for the same reason.
- Call sites set a height and let the width follow (`h-7 w-auto` in the navbar, `h-8` in the footer,
  `h-14 sm:h-20` in the hero). The stroke is in user units, so its optical weight holds at every size.
- If it is redrawn, **keep it one flower in open line**. That is the whole idea of the mark.
- It is still a placeholder in the sense that matters: a real illustrator should draw this. What is here is
  a faithful sketch of the concept, not a finished identity.

### Croatian diacritics — the one non-obvious font constraint

Each family ships as **two** files split on `unicode-range`, exactly as Google Fonts serves them: `-latin`
(ASCII and Latin-1) and `-latin-ext`. The **latin-ext half is what carries č, ć, š, ž and đ**, starting
with the site's own name in the `h1`.

- Never consolidate the `@font-face` blocks or drop a `-latin-ext` file to "save bytes". The browser only
  fetches it when the page uses one of those characters — but this page always will.
- `index.html` preloads `valleysans-latin`, `valleysans-latin-ext` and `nunito-latin`. The ext file is
  preloaded specifically because "Riječ" is in the largest text on the first screen; without it the
  headline reflows mid-load.
- If you replace a font, take both halves from the same Google Fonts request and keep the `unicode-range`
  declarations byte-for-byte.

The CSS references fonts as `../fonts/…` because the stylesheet is emitted into `dist/assets/` — from
there, `../fonts/` resolves to `dist/fonts/`. Vite logs "didn't resolve at build time" for each one; that
warning is expected and correct.

## Reusable CSS classes (src/index.css)

`.label` · `.section-heading` · `.section-sub` · `.lede` · `.btn-primary` · `.btn-ghost` · `.soft-card` ·
`.photo-frame` · `.hairline` · `.hero-height` · `.reveal` (plus the `-light` / `-dark` variants above).

Reach for these before writing new utility soup; a section that needs a class the others do not have is
usually a section that has drifted from the system.

## Components

- **`<Reveal delay={ms}>`** wraps anything that should fade and rise into view. The hidden state is scoped
  to `.reveal-ready`, a class `App.jsx` adds to `<html>` on mount — so the **prerendered page stays fully
  visible if JavaScript never runs**. Do not move that hidden state into the base stylesheet.
- **`<Photo>`** renders an image, or a labelled placeholder when `src` is falsy. Every image slot goes
  through it, which is why the page looks finished with no photography at all. Pass `tone="dark"` on `sea`.
- **`<Sprig>`** is the house mark — a stem with three blooms, the favicon drawn in JSX. It inherits
  `currentColor` (`dandelion-deep` on the light bands, `dandelion` in the footer). It stands in for a logo, and should be replaced
  wholesale if a real one arrives.
- **`<Divider>`** — see "Bands and seams".

Motion is deliberately slow and small: `animate-breathe` (11s) and `animate-sway` (9s), plus the reveal
transitions. All of it is disabled under `prefers-reduced-motion`, and anything new must be too.

## Where the content lives

| what | where |
| --- | --- |
| Business name, contact details, location, social links, canonical URL | `src/siteInfo.js` |
| Nav links and the Services submenu | `src/components/Navbar.jsx` |
| Footer link list | `src/components/Footer.jsx` |
| The four services | the `services` array in `src/sections/Services.jsx` |
| The three how-it-works steps | the `steps` array in `src/sections/Approach.jsx` |
| Testimonials | the `quotes` array in `src/sections/Testimonials.jsx` |
| Prices | the `rates` array in `src/sections/Rates.jsx` |
| Questions and answers | the `faqs` array in `src/sections/FAQ.jsx` |
| `<title>`, meta description, Open Graph, JSON-LD | `index.html` (its own copy — edit alongside `siteInfo.js`) |

Section IDs, used by every anchor link: `#home` `#services` `#about` `#approach` `#testimonials` `#rates`
`#faq` `#contact` `#footer`.

## Adding photos

1. Export to **WebP** at several widths — the convention from the sibling sites is roughly 400 / 700 / 1100
   for in-page images, and a `-1200` for anything used as an OG image.
2. Name them `<slug>-<width>.webp` and drop them in `public/images/`.
3. In the section: `const shot = responsivePhoto('slug', [400, 700, 1100])`, then
   `<Photo {...shot} sizes="(min-width: 1024px) 40vw, 100vw" alt="…" />`.

Never write a literal `/images/…` path or use `import.meta.env.BASE_URL`. Both break under the GitHub Pages
sub-path; `src/images.js` explains why in detail.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `dist/` to
GitHub Pages. The workflow sets `enablement: true`, so it turns Pages on rather than failing if it is off.

The site is served at **https://word-and-rijec.com/**.

`public/CNAME` holds the bare domain and is copied into `dist/` by the build. **That file is what keeps the
custom domain attached** — GitHub Pages reads it from each published artifact, and deleting it resets the
site to the `github.io` URL on the next deploy.

`vite.config.js` sets **`base: './'`**. At a domain root an absolute `/` base would work equally well, but
the project-pages URL (`xarlos89.github.io/word-and-rijec/`) stays live as a fallback and an absolute
`/asset` path 404s under that sub-path. The relative base means one build serves both — don't "tidy" it to
`/`. Everything emitted is document-relative to match; see `src/images.js`.

### The origin is hard-coded in five places

These are static files that cannot import from `siteInfo.js`, so a domain change means editing all of them
together:

1. `src/siteInfo.js` → `site.url`
2. `index.html` → `<link rel="canonical">`, `og:url`, and the `@id`/`url` fields in the JSON-LD
3. `public/sitemap.xml` → `<loc>`
4. `public/404.html` → the favicon link, both `@font-face` sources and the home-page link. These have to be
   absolute: GitHub Pages serves this file for unknown paths at *any* depth, where a relative path breaks
5. `public/CNAME` → the bare domain, no scheme, no trailing slash

`grep -rn "word-and-rijec" --exclude-dir=node_modules --exclude-dir=dist .` finds the lot.

### DNS, one time

At the registrar, for the apex `word-and-rijec.com`, four A records and four AAAA records pointing at
GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
CNAME www xarlos89.github.io.
```

Then in the repo's **Settings → Pages**: set the custom domain to `word-and-rijec.com` (it should already be
picked up from `public/CNAME` after the first deploy), wait for the DNS check to pass, and tick **Enforce
HTTPS** — the certificate is issued by GitHub and can take up to an hour after DNS resolves. GitHub
redirects `www` to the apex automatically once the `www` CNAME is in place.

If the Pages settings ever show the domain as "not properly configured", check the apex A records first;
that is almost always a registrar that wrote them against a subdomain instead of `@`.

## SEO

`index.html` carries the title, description, Open Graph, Twitter card and a small JSON-LD graph
(`WebSite` + `ProfessionalService` with an `OfferCatalog` of the four services). The JSON-LD deliberately
claims **only what is actually true**: the business name, the services, and the two languages. No person,
address, opening hours, price, rating or review is asserted, because none of it is known. Add to it as real
details arrive — never to pad it out.

Absent on purpose, and each needs its own commit when the thing exists: `og:image` (no artwork yet; a
missing image is worse than no tag), the raster favicons (run `scripts/build-icons.py`, then uncomment the
two `<link>` tags and fill the empty `icons` array in `site.webmanifest`), and `aggregateRating`/`Review`
(self-published reviews are ignored under Google's review-snippet policy at best).

### The site is noindex, on purpose

`index.html` has `<meta name="robots" content="noindex, nofollow">` and `public/robots.txt` is
`Disallow: /`.

**The domain being live does not change this.** If anything it raises the stakes: the placeholder would now
be indexed on the real domain rather than a throwaway github.io URL, and the real site would launch on top
of it. Flipping these two is the *launch* switch, not the *domain* switch.

To launch, in one commit: delete the `robots` meta tag, change `robots.txt` to `Allow: /`, uncomment its
`Sitemap:` line, and bump `<lastmod>` in `public/sitemap.xml`. Do it in the same commit that ships real
copy, not before.

## What's placeholder

Assume everything is, unless it is in this list of things that are real:

- The business name, "Word & Riječ", the domain `word-and-rijec.com`, and the two languages.
- The four services: tutoring, language lessons, editing & proofreading, copywriting.
- The stack, the design system, the build and the deploy workflow.

Placeholder, and to be replaced before anything is shown to the public:

- **All body copy.** Every paragraph on the page is lorem ipsum.
- **`src/siteInfo.js`** — `hello@example.com`, "Placeholder Name", the tagline, "Online, worldwide". No
  phone number and no social links; the footer and the contact section hide those fields while they are
  empty, so leaving them blank is safe. `site.url` is now real.
- **Rates.** Every figure in `Rates.jsx` is `€00` and was invented to show the layout. Nothing has been
  agreed.
- **Testimonials.** Not real quotes from real students. Delete the section from `App.jsx` (and re-pair the
  dividers around it) rather than launching with invented ones.
- **FAQ answers.** The questions are the ones a language service is usually asked; the answers are lorem.
- **Photography.** None. Every `<Photo>` renders its placeholder state.
- **Logo.** `<Logo>`, `<Sprig>` and `public/favicon.svg` are drawn here, not commissioned. See "The
  logo" above — the concept is right, the execution should go to an illustrator.

Two known gaps in the build itself, neither a bug to be surprised by:

- **No mobile nav.** Below `md` the navbar keeps the wordmark and the "Get in touch" button and hides the
  links entirely. A drawer or sheet is still to be built.
- **No contact form.** A form needs a backend and this is a static build; the contact section is a mailto
  link. A hosted form service would be the small next step.

### Don't invent

The client has not supplied copy, prices, credentials or testimonials. When filling any of this in, use
what she actually sends. If a section has no real content to put in it, remove the section rather than
writing plausible-sounding filler — a page that says less is recoverable, a page that says something untrue
about her business is not.
