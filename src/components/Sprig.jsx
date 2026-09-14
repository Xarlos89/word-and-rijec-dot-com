/**
 * The small ornament: one immortelle stem with a flat-topped umbel of four
 * buttons. It is the flower from the section seams and the favicon, drawn at
 * a size that still reads at 16px — which the full <Logo> does not.
 *
 * Inherits currentColor. Used beside labels, in the <Photo> empty state, and
 * anywhere the mark needs to be tiny.
 */
export default function Sprig({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 22c0-5.5.6-9 1.4-12" />
      <circle cx="6.6" cy="8.4" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="11.4" cy="6.6" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="16.6" cy="6.6" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="21" cy="8.4" r="2.1" fill="currentColor" stroke="none" />
      <path d="M13.4 10c-1.2.6-2.6.6-3.8 0" />
    </svg>
  )
}
