import { LOREM } from './lorem'

/**
 * Croatian. Mirrors en.js key for key — src/i18n/index.jsx asserts that at
 * module load, so a missing key fails `npm run build`.
 *
 * WHAT IS TRANSLATED HERE, AND WHAT IS NOT. The client has not sent copy in
 * Croatian, so nothing below invents any. English copy has arrived for most
 * of the page; it is NOT translated here on her behalf. Translated: the
 * section names, the service and rate names, the short audience lists, the
 * package labels, the FAQ questions, and the UI chrome. Still `LOREM.x`: every
 * sentence or paragraph of her copy, waiting for her own Croatian. Croatian
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
      lessons: 'Satovi',
      tutoring: 'Instrukcije',
      editing: 'Lektura i korektura',
      copywriting: 'Pisanje tekstova',
    },
  },

  hero: {
    lede: LOREM.heroLede,
    body: [LOREM.heroBody, LOREM.heroBodyTwo],
    ctaPrimary: 'Javite mi se',
    ctaSecondary: 'Pogledajte što nudim',
    offer: ['Instrukcije i satovi', 'Lektura i korektura', 'Pisanje tekstova'],
  },

  services: {
    heading: 'Usluge',
    sub: 'S čime vam mogu pomoći',
    items: {
      lessons: {
        title: 'Satovi jezika',
        // A sentence of her copy in English, so it waits for her Croatian.
        audience: LOREM.lessonsAudience,
        body: LOREM.serviceLessons,
      },
      tutoring: {
        title: 'Instrukcije',
        audience: 'Učenicima i studentima',
        body: LOREM.serviceTutoring,
      },
      editing: {
        title: 'Lektura i korektura',
        audience: 'Diplomski radovi, članci, brošure',
        body: LOREM.serviceEditing,
      },
      copywriting: {
        title: 'Pisanje tekstova',
        audience: 'Mrežne stranice, kampanje, brošure',
        body: LOREM.serviceCopywriting,
      },
    },
  },

  about: {
    heading: 'O meni',
    photoAlt: 'Rebekah Berković, portret',
    body: LOREM.aboutBody,
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
    perHour: '/ sat',
    perSession: '/ termin',
    save: 'ušteda',
    quote: 'Cijena po projektu — javite se za ponudu.',
    note: LOREM.ratesNote,
    packages: {
      single: 'Pojedinačni termin',
      five: 'Paket od 5 termina',
      ten: 'Paket od 10 termina',
    },
    items: {
      tutoring: { name: 'Školske instrukcije iz engleskog ili hrvatskog' },
      lessons: { name: 'Satovi jezika' },
      academic: { name: 'Akademski engleski i pisanje' },
      editing: { name: 'Lektura i korektura' },
      copywriting: { name: 'Pisanje tekstova' },
    },
  },

  faq: {
    heading: 'Česta pitanja',
    sub: 'Dobro je znati',
    items: [
      { q: 'Održavate li nastavu online ili uživo?', a: LOREM.faqAnswerOne },
      { q: 'Koliko traje jedan sat?', a: LOREM.faqAnswerTwo },
      { q: 'Koju razinu znanja trebam za početak?', a: LOREM.faqAnswerThree },
      { q: 'U kojem roku možete napraviti lekturu?', a: LOREM.faqAnswerFour },
      { q: 'Što ako moram otkazati termin?', a: LOREM.faqAnswerFive },
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
