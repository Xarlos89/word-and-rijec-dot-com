/**
 * EVERY PLACEHOLDER PARAGRAPH ON THE SITE, IN ONE FILE.
 *
 * The English page now carries the client's own copy almost everywhere; what
 * is left here is mostly the CROATIAN side, which waits for her to write it
 * herself rather than for anyone to translate her English. See CLAUDE.md →
 * "Don't invent".
 *
 * When real copy arrives, replace a `LOREM.x` reference in the dictionary
 * with the text and delete the entry here once nothing references it. When
 * this file is empty, the site is ready for the launch switch in
 * CLAUDE.md → SEO.
 *
 * `grep -rn "LOREM\." src/i18n/` lists what is still outstanding.
 */
export const LOREM = {
  // Croatian only — the English tagline is her hero line.
  tagline: 'Lorem ipsum dolor sit amet',

  heroLede: 'Lorem ipsum dolor sit amet',
  heroBody:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  heroBodyTwo:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.',

  lessonsAudience: 'Lorem ipsum dolor sit amet',
  serviceTutoring: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  serviceLessons: 'Ut enim ad minim veniam.',
  serviceEditing: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  serviceCopywriting: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',

  aboutBody: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  ],

  stepOneTitle: 'Lorem ipsum',
  stepOneBody: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  stepTwoTitle: 'Dolor sit amet',
  stepTwoBody: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  stepThreeTitle: 'Consectetur elit',
  stepThreeBody: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',

  quoteOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  quoteTwo:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quoteThree:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  quoteDetail: 'Lorem ipsum',
  studentName: 'Lorem I.',

  ratesNote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',

  faqAnswerOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  faqAnswerTwo:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  faqAnswerThree:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  faqAnswerFour:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  faqAnswerFive:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',

  contactBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}
