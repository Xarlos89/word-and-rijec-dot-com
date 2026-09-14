import { LOREM } from './lorem'

/**
 * Croatian. Mirrors en.js key for key — src/i18n/index.jsx asserts that at
 * module load, so a missing key fails `npm run build`.
 *
 * WHAT IS TRANSLATED HERE, AND WHAT IS NOT. The client has not sent copy in
 * either language, so nothing below invents any. Translated: the section
 * names, the four services, the audiences they are for, the rate units, the
 * questions a language service is actually asked, and the UI chrome. Still
 * `LOREM.x`, identical to the English side: every body paragraph. Croatian
 * lorem would be indistinguishable from real Croatian to a reader who does
 * not speak it, which is exactly the failure mode CLAUDE.md → "Don't invent"
 * is guarding against.
 */
export default {
  meta: {
    title: 'Word & Riječ — jezične usluge na engleskom i hrvatskom',
    description:
      'Jezične usluge na engleskom i hrvatskom: instrukcije, satovi jezika, lektura, korektura i pisanje tekstova.',
    ogDescription:
      'Instrukcije, satovi jezika, lektura, korektura i pisanje tekstova na engleskom i hrvatskom.',
  },

  site: {
    what: 'Jezične usluge na engleskom i hrvatskom',
    location: 'Online, bilo gdje u svijetu',
    tagline: LOREM.tagline,
  },

  switcher: {
    label: 'Jezik',
    toOther: 'English',
    aria: 'Prebaci na engleski',
  },

  nav: {
    services: 'Usluge',
    about: 'O meni',
    approach: 'Kako to funkcionira',
    testimonials: 'Preporuke',
    rates: 'Cijene',
    faq: 'Česta pitanja',
    contact: 'Javite mi se',
    submenu: {
      tutoring: 'Instrukcije',
      lessons: 'Satovi',
      editing: 'Lektura i korektura',
      copywriting: 'Pisanje tekstova',
    },
  },

  hero: {
    lede: LOREM.heroLede,
    body: LOREM.heroBody,
    ctaPrimary: 'Javite mi se',
    ctaSecondary: 'Pogledajte što nudim',
    offer: ['Instrukcije i satovi', 'Lektura i korektura', 'Pisanje tekstova'],
  },

  services: {
    heading: 'Usluge',
    sub: 'S čime vam mogu pomoći',
    lede: LOREM.servicesLede,
    items: {
      tutoring: {
        title: 'Instrukcije',
        audience: 'Učenicima i studentima',
        body: LOREM.serviceTutoring,
      },
      lessons: {
        title: 'Satovi jezika',
        audience: 'Engleski i hrvatski, svaka razina',
        body: LOREM.serviceLessons,
      },
      editing: {
        title: 'Lektura i korektura',
        audience: 'Diplomski radovi, članci, rukopisi',
        body: LOREM.serviceEditing,
      },
      copywriting: {
        title: 'Pisanje tekstova',
        audience: 'Mrežne stranice, brošure, kampanje',
        body: LOREM.serviceCopywriting,
      },
    },
  },

  about: {
    heading: 'O meni',
    photoAlt: 'Portret instruktorice',
    bodyOne: LOREM.aboutOne,
    bodyTwo: LOREM.aboutTwo,
  },

  approach: {
    heading: 'Kako to funkcionira',
    sub: 'Od prve poruke do prvog sata',
    steps: [
      { title: LOREM.stepOneTitle, body: LOREM.stepOneBody },
      { title: LOREM.stepTwoTitle, body: LOREM.stepTwoBody },
      { title: LOREM.stepThreeTitle, body: LOREM.stepThreeBody },
    ],
  },

  testimonials: {
    heading: 'Preporuke',
    sub: 'Njihovim riječima',
    quotes: [
      { quote: LOREM.quoteOne, name: LOREM.studentName, detail: LOREM.quoteDetail },
      { quote: LOREM.quoteTwo, name: LOREM.studentName, detail: LOREM.quoteDetail },
      { quote: LOREM.quoteThree, name: LOREM.studentName, detail: LOREM.quoteDetail },
    ],
  },

  rates: {
    heading: 'Cijene',
    sub: 'Koliko što košta',
    note: LOREM.ratesNote,
    items: {
      tutoring: { name: 'Instrukcije', unit: 'za 60 minuta' },
      lessons: { name: 'Sat jezika', unit: 'za 60 minuta' },
      // Croatian groups thousands with a full stop, not a comma.
      editing: { name: 'Lektura i korektura', unit: 'za 1.000 riječi' },
      copywriting: { name: 'Pisanje tekstova', unit: 'ponuda po projektu' },
    },
  },

  faq: {
    heading: 'Česta pitanja',
    sub: 'Dobro je znati',
    items: [
      { q: LOREM.faqQuestionOne, a: LOREM.faqAnswerOne },
      { q: 'Održavate li nastavu online ili uživo?', a: LOREM.faqAnswerTwo },
      { q: 'Koliko traje jedan sat?', a: LOREM.faqAnswerThree },
      { q: 'Koju razinu znanja trebam za početak?', a: LOREM.faqAnswerFour },
      { q: 'U kojem roku možete napraviti lekturu?', a: LOREM.faqAnswerFive },
      { q: 'Što ako moram otkazati termin?', a: LOREM.faqAnswerSix },
    ],
  },

  contact: {
    heading: 'Javite mi se',
    body: LOREM.contactBody,
  },

  footer: {
    exploreLabel: 'Istražite',
    contactLabel: 'Kontakt',
    blurb: LOREM.footerBlurb,
  },
}
