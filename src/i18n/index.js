import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import it from './locales/it.json'

const i18n = createI18n({
  legacy: false,
  locale: typeof window !== 'undefined' ? (localStorage.getItem('locale') || 'de') : 'de',
  fallbackLocale: 'de',
  messages: {
    de,
    it
  }
})

export default i18n
