#!/usr/bin/env python3
"""
Trims the variable axes of the self-hosted fonts down to the ranges this
design actually uses, in place, in public/fonts/.

The four files in public/fonts/ came straight from Google Fonts: two families
(Valley Sans, Nunito), each split into a `latin` and a `latin-ext` file on
unicode-range. The split is load-bearing — latin-ext is what carries č, ć, š,
ž and đ — so this script never merges or drops a file, it only narrows the
weight axis inside each one.

Only Nunito is variable; Valley Sans ships as a single static 400 and has
nothing to trim. The page uses 300 to 700 of Nunito (the spaced-caps labels
are bold). Masters outside those ranges are downloaded and
never used.

This RESTRICTS the range rather than pinning it to one instance, so the axis
stays variable and every value the page asks for is still interpolated rather
than substituted.

Re-run this if you replace a font file — a fresh download from Google Fonts
carries the full designspace again. And widen the limits here first if the
design ever reaches for a heavier weight, or the browser will clamp to the
range instead of honouring it. Whatever you change here, change the
`font-weight` declarations in src/index.css to match.

    pip install fonttools brotli
    python3 scripts/trim-fonts.py
"""
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

FONTS = Path(__file__).resolve().parent.parent / 'public' / 'fonts'

LIMITS = {
    # Valley Sans is a STATIC font — one weight, no axes — so it is not
    # listed here and this script must not be pointed at it.
    'nunito-latin.woff2': {'wght': (300, 700)},
    'nunito-latin-ext.woff2': {'wght': (300, 700)},
}


def main():
    total_before = total_after = 0
    for name, limits in LIMITS.items():
        path = FONTS / name
        before = path.stat().st_size
        font = TTFont(path)
        instancer.instantiateVariableFont(font, limits, inplace=True, updateFontNames=False)
        font.flavor = 'woff2'
        font.save(path)
        after = path.stat().st_size
        total_before += before
        total_after += after
        print(f'{name:34} {before / 1024:6.0f} KB -> {after / 1024:6.0f} KB')
    saved = total_before - total_after
    print(f'{"total":34} {total_before / 1024:6.0f} KB -> {total_after / 1024:6.0f} KB '
          f'({saved / 1024:.0f} KB, {100 * saved / total_before:.0f}% smaller)')


if __name__ == '__main__':
    main()
