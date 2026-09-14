/**
 * The brand mark: the word "word" written as a single unbroken line, whose
 * final letter grows a stem and opens into an immortelle umbel — the same
 * flat-topped cluster of buttons that grows along every section seam.
 *
 * It is ONE path. No lifts, no joins, no fills: a one-line tattoo. Which is
 * also its limit — below about 60px the letters close up into a squiggle, so
 * use <Sprig> for small ornament slots and keep this one at 28px of height or
 * more (the navbar runs it at its floor; the hero and footer give it room).
 *
 * Inherits currentColor, so the band it sits on decides its colour.
 *
 * If this is ever redrawn — or replaced by a real illustrator's version, which
 * it should be — keep it a single continuous stroke with round caps. That is
 * the whole idea of the mark.
 */
export default function Logo({ className = '', title }) {
  return (
    <svg
      viewBox="0 0 172 100"
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
      <path d="M8,56 C9,72 13,86 21,86 C29,86 31,72 32,57 C33,72 37,86 45,86 C53,86 55,72 56,57 C57,50 62,46 70,46 C80,46 86,56 86,66 C86,78 79,86 70,86 C61,86 55,78 55,68 C55,58 62,50 72,49 C80,48 84,52 86,58 C88,66 88,76 88,86 C88,72 92,60 102,58 C106,57 109,59 110,62 C112,56 118,52 126,53 C135,54 140,62 140,71 C140,80 133,86 125,86 C116,86 111,79 112,71 C113,63 120,58 128,59 C136,60 141,50 142,40 C142,34 142,30 142,27 C139,21 125.5,25.0 122.5,20.0 C119.7385,20.0 117.5,17.761499999999998 117.5,15.0 C117.5,12.2385 119.7385,10.0 122.5,10.0 C125.2615,10.0 127.5,12.2385 127.5,15.0 C127.5,17.761499999999998 125.2615,20.0 122.5,20.0 C126.0,21.25 130.79,19.275 135.2,17.7 C131.72051,17.7 128.89999999999998,14.87949 128.89999999999998,11.4 C128.89999999999998,7.92051 131.72051,5.1000000000000005 135.2,5.1000000000000005 C138.67949,5.1000000000000005 141.5,7.92051 141.5,11.4 C141.5,14.87949 138.67949,17.7 135.2,17.7 C139.60999999999999,19.275 144.39000000000001,19.275 148.8,17.7 C145.32051,17.7 142.5,14.87949 142.5,11.4 C142.5,7.92051 145.32051,5.1000000000000005 148.8,5.1000000000000005 C152.27949,5.1000000000000005 155.10000000000002,7.92051 155.10000000000002,11.4 C155.10000000000002,14.87949 152.27949,17.7 148.8,17.7 C153.21,19.275 158.0,21.25 161.5,20.0 C158.7385,20.0 156.5,17.761499999999998 156.5,15.0 C156.5,12.2385 158.7385,10.0 161.5,10.0 C164.2615,10.0 166.5,12.2385 166.5,15.0 C166.5,17.761499999999998 164.2615,20.0 161.5,20.0 " />
    </svg>
  )
}
