/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // The brief, literally: immortelle flowers on a seaside walk, pine
        // trees, the ocean. Every colour here is one of those four things.
        //
        // TWO BACKGROUND COLOURS behind the page body, and they simply
        // alternate: `mint`, `haze`, `mint`, `haze`… `pine` is not a band —
        // it is the footer, and that is the only place it grounds anything.
        mint: '#B8D6B2',        // the meadow — mint green, the page's signature
        haze: '#A7B0AA',        // sun-bleached limestone. The grey band. Darker than
                                // it looks it should be: against a green mint it has
                                // to carry its own value or the two bands merge and
                                // the flowers in the seam disappear with them.
        pine: {
          DEFAULT: '#24463C',   // the trees. The footer, and heading type on light
          light: '#33594D',     // dark photo placeholders only
        },

        // Surface — raised things (cards, the navbar pill, ghost buttons) and
        // the text colour on `pine`. Never a section background.
        cloud: '#F4F5F1',

        // The immortelle bloom: a soft, pastel dandelion yellow. `dandelion`
        // is the primary button — a ground for `ink` type (9.7:1) — and
        // `dandelion-deep` is the only form that can be type on a light
        // ground: prices on a `cloud` card (6.5:1), the numerals in Approach,
        // the ring around the primary button, and its hover fill.
        //
        // The bloom was pulled back from a bright #F0C93E to this creamier
        // tone: same 45° hue, less saturation, more light. It only moves in
        // that direction safely — every use of it is a GROUND, so going paler
        // raises the contrast of the type sitting on it. `deep` did not move
        // with it: it is the button's ring, and at 3.2:1 on `haze` it is the
        // one value here with no headroom left.
        dandelion: {
          DEFAULT: '#EDD382',
          deep: '#6E540A',
        },

        ink: {
          DEFAULT: '#212D27',
          soft: '#333F38',
        },
        line: '#74837C',        // hairlines and ghost-button borders
      },
      fontFamily: {
        // Berkshire Swash, at the client's request: titles and the lines
        // under them. One weight (400) and no italic — see src/index.css, and
        // never put a `font-medium` or heavier utility on display type or the
        // browser fakes it. Body text stays in Nunito. See CLAUDE.md → Type.
        display: ['"Berkshire Swash"', 'Georgia', 'serif'],
        // Valley Sans, for the small titles INSIDE cards and lists — service
        // titles, the how-it-works step titles, rate names, FAQ questions.
        // The client found Berkshire too much there. Same one-weight rule.
        title: ['"Valley Sans"', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '1.75rem',
        blob: '2.5rem',
      },
      // Two layers each: a close contact shadow so the edge reads, and a wide
      // soft one so the surface lifts off the page. These carry more weight
      // than a pale design would want, because they have to: a `cloud` card
      // on the `mint` band is only 1.21:1 against it, so the shadow is most
      // of what says the card is raised at all.
      boxShadow: {
        soft: '0 2px 8px -3px rgba(20, 38, 32, 0.16), 0 16px 36px -16px rgba(20, 38, 32, 0.30)',
        lift: '0 8px 18px -8px rgba(20, 38, 32, 0.22), 0 36px 64px -24px rgba(20, 38, 32, 0.40)',
        deep: '0 12px 28px -10px rgba(20, 38, 32, 0.30), 0 48px 88px -32px rgba(20, 38, 32, 0.50)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.07)', opacity: '0.75' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1.6deg)' },
          '50%': { transform: 'rotate(1.6deg)' },
        },
      },
      animation: {
        breathe: 'breathe 11s ease-in-out infinite',
        sway: 'sway 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
