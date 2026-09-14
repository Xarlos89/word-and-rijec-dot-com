import { LOREM } from './lorem'

/**
 * English — the root locale, and the reference shape. hr.js must mirror this
 * object key for key and array for array; src/i18n/index.jsx asserts it at
 * module load, so `npm run build` fails on drift rather than prerendering a
 * page with a hole in it.
 *
 * Anything reading `LOREM.x` is still waiting on the client's copy. Real
 * strings — the four services, the two languages, the section names, the
 * questions a language service actually gets asked — are written out.
 */
export default {
  meta: {
    title: 'Word & Riječ — English and Croatian language services',
    description:
      'English and Croatian language services: tutoring, language lessons, editing, proofreading and copywriting.',
    ogDescription:
      'Tutoring, language lessons, editing, proofreading and copywriting in English and Croatian.',
  },

  // Facts that read differently in each language. The name, the email and the
  // canonical URL are NOT here — they are the same in both, and live in
  // src/siteInfo.js.
  site: {
    what: 'English and Croatian language services',
    location: 'Online, worldwide',
    tagline: LOREM.tagline,
  },

  switcher: {
    label: 'Language',
    // What the control offers, named in the language it switches TO.
    toOther: 'Hrvatski',
    aria: 'Switch to Croatian',
  },

  nav: {
    services: 'Services',
    about: 'About',
    approach: 'How it works',
    testimonials: 'Testimonials',
    rates: 'Rates',
    faq: 'FAQ',
    contact: 'Get in touch',
    submenu: {
      tutoring: 'Tutoring',
      lessons: 'Lessons',
      editing: 'Editing & proofreading',
      copywriting: 'Copywriting',
    },
  },

  hero: {
    lede: LOREM.heroLede,
    body: LOREM.heroBody,
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See what I offer',
    offer: ['Tutoring & lessons', 'Editing & proofreading', 'Copywriting'],
  },

  services: {
    heading: 'Services',
    sub: 'What I can help with',
    lede: LOREM.servicesLede,
    items: {
      tutoring: {
        title: 'Tutoring',
        audience: 'School and university students',
        body: LOREM.serviceTutoring,
      },
      lessons: {
        title: 'Language lessons',
        audience: 'English and Croatian, any level',
        body: LOREM.serviceLessons,
      },
      editing: {
        title: 'Editing & proofreading',
        audience: 'Theses, articles, manuscripts',
        body: LOREM.serviceEditing,
      },
      copywriting: {
        title: 'Copywriting',
        audience: 'Websites, brochures, campaigns',
        body: LOREM.serviceCopywriting,
      },
    },
  },

  about: {
    heading: 'About',
    photoAlt: 'Portrait of the tutor',
    bodyOne: LOREM.aboutOne,
    bodyTwo: LOREM.aboutTwo,
  },

  approach: {
    heading: 'How it works',
    sub: 'From first message to first lesson',
    steps: [
      { title: LOREM.stepOneTitle, body: LOREM.stepOneBody },
      { title: LOREM.stepTwoTitle, body: LOREM.stepTwoBody },
      { title: LOREM.stepThreeTitle, body: LOREM.stepThreeBody },
    ],
  },

  testimonials: {
    heading: 'Testimonials',
    sub: 'In their own words',
    quotes: [
      { quote: LOREM.quoteOne, name: LOREM.studentName, detail: LOREM.quoteDetail },
      { quote: LOREM.quoteTwo, name: LOREM.studentName, detail: LOREM.quoteDetail },
      { quote: LOREM.quoteThree, name: LOREM.studentName, detail: LOREM.quoteDetail },
    ],
  },

  rates: {
    heading: 'Rates',
    sub: 'What things cost',
    note: LOREM.ratesNote,
    items: {
      tutoring: { name: 'Tutoring', unit: 'per 60 minutes' },
      lessons: { name: 'Language lesson', unit: 'per 60 minutes' },
      editing: { name: 'Editing & proofreading', unit: 'per 1,000 words' },
      copywriting: { name: 'Copywriting', unit: 'quoted per project' },
    },
  },

  faq: {
    heading: 'FAQ',
    sub: 'Good to know',
    items: [
      { q: LOREM.faqQuestionOne, a: LOREM.faqAnswerOne },
      { q: 'Do you teach online or in person?', a: LOREM.faqAnswerTwo },
      { q: 'How long is a lesson?', a: LOREM.faqAnswerThree },
      { q: 'What level do I need to start?', a: LOREM.faqAnswerFour },
      { q: 'How quickly can you turn around editing work?', a: LOREM.faqAnswerFive },
      { q: 'What happens if I need to cancel?', a: LOREM.faqAnswerSix },
    ],
  },

  contact: {
    heading: 'Get in touch',
    body: LOREM.contactBody,
  },

  footer: {
    exploreLabel: 'Explore',
    contactLabel: 'Get in touch',
    blurb: LOREM.footerBlurb,
  },
}
