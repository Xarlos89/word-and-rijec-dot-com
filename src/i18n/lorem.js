/**
 * EVERY PLACEHOLDER PARAGRAPH ON THE SITE, IN ONE FILE.
 *
 * The client has not supplied copy. Rather than let lorem hide inside the
 * dictionaries — where a Croatian reader would eventually find English
 * filler, or worse, invented Croatian marketing copy — both en.js and hr.js
 * import the SAME strings from here.
 *
 * That makes the remaining work mechanical: when real copy arrives, replace a
 * `LOREM.x` reference in en.js with the English text and the one in hr.js with
 * the Croatian, and delete the entry here once nothing references it. When
 * this file is empty, the site is ready for the launch switch in
 * CLAUDE.md → SEO.
 *
 * `grep -rn "LOREM\." src/i18n/` lists what is still outstanding.
 */
export const LOREM = {
  tagline: 'Lorem ipsum dolor sit amet',

  heroLede: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  heroBody:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

  servicesLede:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  serviceTutoring:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  serviceLessons:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  serviceEditing:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  serviceCopywriting:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  aboutOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  aboutTwo:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',

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

  ratesNote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',

  faqQuestionOne: 'Lorem ipsum dolor sit amet?',
  faqAnswerOne:
    'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  faqAnswerTwo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  faqAnswerThree:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  faqAnswerFour:
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  faqAnswerFive:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  faqAnswerSix:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',

  contactBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  footerBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',

  studentName: 'Student name',
}
