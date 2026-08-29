import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import mk from './locales/mk.json'
import { getLangFromPath } from './seo/paths'

const resources = {
  en: { translation: en },
  mk: { translation: mk }
}

const urlPathDetector = {
  name: 'urlPath',
  lookup() {
    if (typeof window === 'undefined') return undefined
    return getLangFromPath(window.location.pathname)
  }
}

const detector = new LanguageDetector()
detector.addDetector(urlPathDetector)

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'mk'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['urlPath', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = lng
  }
})

if (typeof document !== 'undefined' && document.documentElement) {
  document.documentElement.lang = i18n.language || 'en'
}

export default i18n
