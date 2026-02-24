import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import mk from './locales/mk.json'

const resources = {
  en: { translation: en },
  mk: { translation: mk }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'mk'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

// Set initial lang (languageChanged may not fire before first paint)
if (typeof document !== 'undefined' && document.documentElement) {
  document.documentElement.lang = i18n.language || 'en'
}

export default i18n
