import Sprig from './Sprig'

/**
 * Renders a photo, or a labelled placeholder when `src` is falsy.
 * Every image slot on the site goes through this component, so the page looks
 * finished before any real photography arrives — drop a file into
 * public/images/ and set `src` to swap one in.
 *
 * `srcSet`/`sizes` are optional: pass both (build them with responsivePhoto()
 * in src/images.js) and the browser picks the width that matches the slot
 * instead of downloading the largest file we have.
 */
export default function Photo({ src, srcSet, sizes, alt, className = '', tone = 'light', imgClassName = '', natural = false, width, height }) {
  if (src) {
    // `natural` keeps the photo's own aspect ratio, for grids where cropping
    // to a fixed ratio would cut the subject.
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        className={`${natural ? 'block w-full h-auto' : 'w-full h-full object-cover'} ${imgClassName} ${className}`}
      />
    )
  }

  const dark = tone === 'dark'

  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center ${
        dark ? 'bg-pine-light' : 'bg-cloud'
      } ${className}`}
    >
      <Sprig className={`w-8 h-8 ${dark ? 'text-cloud/25' : 'text-pine/40'}`} />
      <p className={`font-sans text-[13px] leading-relaxed max-w-[16rem] ${dark ? 'text-cloud/45' : 'text-ink-soft/70'}`}>
        {alt}
      </p>
      <p className={`font-sans text-[10px] uppercase tracking-[0.2em] ${dark ? 'text-cloud/25' : 'text-ink-soft/40'}`}>
        Photo coming soon
      </p>
    </div>
  )
}
