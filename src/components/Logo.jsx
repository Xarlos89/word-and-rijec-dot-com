/**
 * The brand mark: a single immortelle flower, drawn in outline — one slender
 * stem, a pair of leaves, and the flat-topped umbel of four buttons that
 * grows along every section seam and sits in the favicon. Same parts as
 * <Sprig> and public/favicon.svg, so the three read as one drawing.
 *
 * It is OUTLINE, not silhouette: the buttons are hollow rings, which is the
 * whole difference between this and <Sprig>. Sprig fills them because at 16px
 * a ring closes up into a dot; the Logo is never used below about 24px, so it
 * can afford the lighter, more drawn line.
 *
 * Portrait, 64×80 — it is a flower, so it stands taller than it is wide. Call
 * sites set a height and let the width follow (`h-7 w-auto`).
 *
 * Inherits currentColor, so the band it sits on decides its colour. The
 * stroke is set in user units and scales with the box, so it keeps the same
 * optical weight at 28px as at 80px.
 *
 * If this is ever redrawn — or replaced by a real illustrator's version, which
 * it should be — keep it one flower in open line. The mark is the bloom, not
 * the lettering: the wordmark beside it already says the name.
 */
export default function Logo({ className = '', title }) {
  return (
    <svg
      viewBox="0 0 64 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {/* Stem, from the base up to where the umbel breaks */}
      <path d="M32 76c0-14-1-28 0-42" />

      {/* The leaf pair — the same shallow drooping arc <Sprig> and the
          favicon carry, so all three read as one drawing */}
      <path d="M40 47c-5 2.5-11 2.5-16 0" />

      {/* Pedicels fanning out to each button, meeting it at its edge */}
      <path d="M32 35c-3-7-9-10-14.7-12.5" />
      <path d="M32 35c-2-6-4-11-5-16.3" />
      <path d="M32 35c2-6 4-11 5-16.3" />
      <path d="M32 35c3-7 9-10 14.7-12.5" />

      {/* The umbel: four hollow buttons on one flat top */}
      <circle cx="12" cy="18" r="7" />
      <circle cx="25" cy="12" r="7" />
      <circle cx="39" cy="12" r="7" />
      <circle cx="52" cy="18" r="7" />
    </svg>
  )
}
