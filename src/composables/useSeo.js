import { watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export function useSeo() {
  const route = useRoute()
  const { locale, t } = useI18n()

  const seoData = {
    de: {
      home: {
        title: 'Irene Berti - Kinder- und Jugendpsychiatrie Brixen Südtirol',
        description: 'Fachärztin für Kinder- und Jugendpsychiatrie und Psychotherapie in Brixen, Südtirol. Private Praxis für mentale Gesundheit von Kindern und Jugendlichen. Alternative zum öffentlichen Gesundheitssystem.',
        keywords: 'Kinderpsychiatrie Brixen, Jugendpsychiatrie Südtirol, Kinderpsychotherapie Brixen, mentale Gesundheit Kinder, Privatpraxis Psychiatrie Südtirol, Neurofeedback Brixen, ADHS Behandlung Südtirol, Angststörungen Kinder Brixen, Psychotherapie Jugendliche Alto Adige'
      },
      neurofeedback: {
        title: 'Neurofeedback - Irene Berti Brixen Südtirol',
        description: 'Innovative Neurofeedback-Therapie für ADHS, Konzentrationsstörungen und Angststörungen bei Kindern und Jugendlichen in Brixen, Südtirol. Wissenschaftlich fundierte Methode.',
        keywords: 'Neurofeedback Brixen, ADHS Therapie Südtirol, Konzentration verbessern Kinder, Neurofeedback Alto Adige, Biofeedback Brixen, ADHS Behandlung ohne Medikamente'
      },
      about: {
        title: 'Über Irene Berti - Kinder- und Jugendpsychiatrie Brixen Südtirol',
        description: 'Dr. med. univ. Irene Berti - Fachärztin für Kinder- und Jugendpsychiatrie mit über 20 Jahren Erfahrung in Italien, Österreich, Schweiz und Deutschland. Privatpraxis in Brixen.',
        keywords: 'Kinderarzt Psychiatrie Brixen, Facharzt Jugendpsychiatrie Südtirol, Psychotherapeut Kinder Brixen, zweisprachige Psychiaterin Alto Adige'
      },
      contact: {
        title: 'Kontakt - Irene Berti Kinder- und Jugendpsychiatrie Brixen Südtirol',
        description: 'Kontaktieren Sie Dr. med. univ Irene Berti in Brixen, Domplatz 20. Private Praxis für Kinder- und Jugendpsychiatrie in Südtirol. Termine nach Vereinbarung.',
        keywords: 'Psychiater Brixen Kontakt, Kinderpsychiatrie Domplatz Brixen, Praxis Jugendpsychiatrie Südtirol, Termin Kinderpsychotherapie'
      },
      booking: {
        title: 'Termin buchen - Irene Berti Kinder- und Jugendpsychiatrie Brixen',
        description: 'Vereinbaren Sie einen Termin in der Privatpraxis für Kinder- und Jugendpsychiatrie in Brixen. Online-Terminbuchung verfügbar.',
        keywords: 'Termin Kinderpsychiatrie Brixen, Erstgespräch Jugendpsychiatrie, Online Termin Psychiater Südtirol'
      }
    },
    it: {
      home: {
        title: 'Irene Berti - Neuropsichiatria Infantile Bressanone Alto Adige',
        description: 'Specialista in neuropsichiatria infantile e psicoterapia a Bressanone, Alto Adige. Studio privato per la salute mentale di bambini e adolescenti. Alternativa al sistema sanitario pubblico.',
        keywords: 'neuropsichiatra infantile Bressanone, psicoterapia bambini Alto Adige, salute mentale bambini, studio privato psichiatria Alto Adige, neurofeedback Bressanone, trattamento ADHD Alto Adige, disturbi ansia bambini, psicoterapia adolescenti Südtirol'
      },
      neurofeedback: {
        title: 'Neurofeedback Irene Berti - Bressanone Alto Adige',
        description: 'Terapia innovativa con neurofeedback per ADHD, disturbi di concentrazione e disturbi d\'ansia in bambini e adolescenti a Bressanone, Alto Adige. Metodo scientificamente fondato.',
        keywords: 'neurofeedback Bressanone, terapia ADHD Alto Adige, migliorare concentrazione bambini, neurofeedback Südtirol, biofeedback Bressanone, trattamento ADHD senza farmaci'
      },
      about: {
        title: 'Chi sono - Irene Berti Neuropsichiatra Infantile Bressanone Alto Adige',
        description: 'Dott.ssa med. univ. Irene Berti - Specialista in neuropsichiatria infantile con oltre 20 anni di esperienza in Italia, Austria, Svizzera e Germania. Studio privato a Bressanone.',
        keywords: 'neuropsichiatra infantile Bressanone, specialista psichiatria adolescenti Alto Adige, psicoterapeuta bambini Bressanone, psichiatra bilingue Südtirol'
      },
      contact: {
        title: 'Contatto - Irene Berti Neuropsichiatria Infantile Bressanone Alto Adige',
        description: 'Contatti Dott.ssa Irene Berti a Bressanone, Piazza Duomo 20. Studio privato per neuropsichiatria infantile in Alto Adige. Appuntamenti su prenotazione.',
        keywords: 'psichiatra Bressanone contatto, neuropsichiatria infantile Piazza Duomo, studio psichiatria Alto Adige, appuntamento psicoterapia bambini'
      },
      booking: {
        title: 'Prenota Appuntamento - Irene Berti Neuropsichiatria Infantile Bressanone',
        description: 'Prenota un appuntamento nello studio privato per neuropsichiatria infantile a Bressanone. Prenotazione online disponibile.',
        keywords: 'appuntamento neuropsichiatra Bressanone, primo colloquio psichiatria infantile, appuntamento online psichiatra Alto Adige'
      }
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://ireneberti.eu',
    name: 'Dr. med. univ. Irene Berti',
    alternateName: 'Irene Berti',
    description: {
      de: 'Fachärztin für Kinder- und Jugendpsychiatrie und Psychotherapie',
      it: 'Specialista in neuropsichiatria infantile e psicoterapia'
    },
    url: 'https://ireneberti.eu',
    logo: 'https://ireneberti.eu/icon_ire_neurofeedback.svg',
    image: 'https://ireneberti.eu/logo_ire_neurofeedback.svg',
    telephone: '+39 379 20 11 123',
    email: 'info@ireneberti.eu',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Domplatz 20',
      addressLocality: 'Brixen',
      addressRegion: 'Südtirol / Alto Adige',
      postalCode: '39042',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.71516',
      longitude: '11.65582'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Bank Transfer',
    medicalSpecialty: [
      'Child Psychiatry',
      'Adolescent Psychiatry',
      'Psychotherapy',
      'Neurofeedback'
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Brixen',
        alternateName: 'Bressanone'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Südtirol',
        alternateName: 'Alto Adige'
      }
    ],
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'German',
        alternateName: 'Deutsch'
      },
      {
        '@type': 'Language',
        name: 'Italian',
        alternateName: 'Italiano'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. med. univ. Irene Berti',
      jobTitle: 'Fachärztin für Kinder- und Jugendpsychiatrie',
      alumniOf: 'Leopold Franzens Universität Innsbruck',
      knowsLanguage: ['German', 'Italian']
    }
  }

  function updateMetaTags(page) {
    const currentLocale = locale.value
    const pageSeo = seoData[currentLocale]?.[page] || seoData.de.home

    // Update title
    document.title = pageSeo.title

    // Update or create meta tags
    updateMeta('description', pageSeo.description)
    updateMeta('keywords', pageSeo.keywords)

    // Open Graph tags
    updateMeta('og:title', pageSeo.title, 'property')
    updateMeta('og:description', pageSeo.description, 'property')
    updateMeta('og:type', 'website', 'property')
    updateMeta('og:url', window.location.href, 'property')
    updateMeta('og:locale', currentLocale === 'de' ? 'de_DE' : 'it_IT', 'property')
    updateMeta('og:site_name', 'Dr. Irene Berti - Kinder- und Jugendpsychiatrie', 'property')

    // Twitter Card tags
    updateMeta('twitter:card', 'summary', 'name')
    updateMeta('twitter:title', pageSeo.title, 'name')
    updateMeta('twitter:description', pageSeo.description, 'name')

    // Additional SEO tags
    updateMeta('author', 'Dr. med. univ. Irene Berti')
    updateMeta('geo.region', 'IT-BZ')
    updateMeta('geo.placename', 'Brixen')
    updateMeta('geo.position', '46.71516;11.65582')
    updateMeta('ICBM', '46.71516, 11.65582')

    // Language alternates
    updateLink('alternate', `https://ireneberti.eu/de/${page}`, 'de', 'hreflang')
    updateLink('alternate', `https://ireneberti.eu/it/${page}`, 'it', 'hreflang')
    updateLink('canonical', window.location.href, null, 'rel')

    // Update HTML lang attribute
    document.documentElement.lang = currentLocale

    // Update structured data
    updateStructuredData()
  }

  function updateMeta(name, content, type = 'name') {
    let element = document.querySelector(`meta[${type}="${name}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(type, name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  function updateLink(rel, href, hreflang = null, type = 'rel') {
    const selector = hreflang 
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`
    
    let element = document.querySelector(selector)
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', rel)
      if (hreflang) element.setAttribute('hreflang', hreflang)
      document.head.appendChild(element)
    }
    element.setAttribute('href', href)
  }

  function updateStructuredData() {
    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData, null, 2)
  }

  function getPageFromRoute() {
    const path = route.path
    if (path.includes('/neurofeedback')) return 'neurofeedback'
    if (path.includes('/about')) return 'about'
    if (path.includes('/contact')) return 'contact'
    if (path.includes('/booking')) return 'booking'
    return 'home'
  }

  // Initial setup
  onMounted(() => {
    const page = getPageFromRoute()
    updateMetaTags(page)
  })

  // Watch for route changes
  watch([() => route.path, () => locale.value], () => {
    const page = getPageFromRoute()
    updateMetaTags(page)
  })

  // Cleanup
  onUnmounted(() => {
    // Optional: cleanup if needed
  })

  return {
    updateMetaTags,
    getPageFromRoute
  }
}
