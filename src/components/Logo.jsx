import { palette } from '../palette'

/**
 * The brand mark: an immortelle growing inside a speech bubble. Language
 * services, and the flower from the brief, in one shape.
 *
 * - The bubble is a solid ground in currentColor (`text-pine` at every call
 *   site), so the mark holds its edge on `mint`, `haze` and `cloud` alike and
 *   still reads at 18px.
 * - Inside it, the stems are `mint` and the blooms are `dandelion` — the same
 *   yellow as the blooms in every section seam. Both are fixed colours, not
 *   currentColor: they sit on the bubble, never on the page, so they do not
 *   change with the band. dandelion on pine is 7.1:1.
 * - The flower is a corymb, like the real plant: three stems, each ending in
 *   a small cluster of round heads, with a pair of needle leaves low down.
 *
 * Square, 64×64. Call sites set a height and let the width follow
 * (`h-7 w-auto`). public/favicon.svg is the same drawing.
 *
 * <Sprig> is still the small line ornament beside labels; it is not this
 * mark and the two are not interchangeable.
 */
export default function Logo({ className = '', title }) {
  return (
    <svg
      viewBox="0 0 64 64"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {/* The bubble, tail at the lower left */}
      <path
        fill="currentColor"
        d="M17 3h30A14 14 0 0 1 61 17v19A14 14 0 0 1 47 50H31l-12.5 10.5c-1.3 1.1-3 .2-3-1.4V50A14 14 0 0 1 3 36V17A14 14 0 0 1 17 3z"
      />

      {/* Three stems from one base, and the leaf pair */}
      <g fill="none" stroke={palette.mint} strokeWidth={2.6}>
        <path d="M32 43V26" />
        <path d="M32 37c-3-5-7-8-13-9.5" />
        <path d="M32 35c3-5 7-8 13-9.5" />
        <path d="M32 41c-3-.5-5-2.2-6-4.6" />
        <path d="M32 40c3-.5 5-2.2 6-4.6" />
      </g>

      {/* The heads: a cluster of three on the centre stem, two on each side */}
      <g fill={palette.dandelion}>
        <circle cx="28.3" cy="21.5" r="4" />
        <circle cx="35.7" cy="21.5" r="4" />
        <circle cx="32" cy="15.5" r="4.3" />
        <circle cx="13.5" cy="25.5" r="3.6" />
        <circle cx="19.5" cy="21.8" r="3.6" />
        <circle cx="44.5" cy="21.8" r="3.6" />
        <circle cx="50.5" cy="25.5" r="3.6" />
      </g>
    </svg>
  )
}
