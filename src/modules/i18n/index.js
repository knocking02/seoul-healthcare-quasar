import { createI18n } from 'vue-i18n'
import ko from './locales/ko.json'
import en from './locales/en.json'
import numberFormats from './rules/number'
import datetimeFormats from './rules/datetime'

const i18n = createI18n({
   locale: import.meta.env.VITE_DEFAULT_LOCALE,
   fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
   legacy: false,
   globalInjection: true,
   messages: { ko, en },
   numberFormats,
   datetimeFormats,
})

export default i18n
