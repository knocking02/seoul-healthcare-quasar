import { LocalStorage } from 'quasar'
import i18n from '.'

const Trans = {
   get defaultLocale() {
      return import.meta.env.VITE_DEFAULT_LOCALE
   },

   get supportedLocales() {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
   },

   set currentLocale(newLocale) {
      i18n.global.locale.value = newLocale
   },

   async switchLanguage(newLocale) {
      Trans.currentLocale = newLocale
      LocalStorage.set('user-locale', newLocale)
   },

   isLocaleSupported(locale) {
      return Trans.supportedLocales.includes(locale)
   },

   getUserLocale() {
      const locale = Trans.getPersistedLocale()
      return locale ? locale : this.defaultLocale
   },

   getPersistedLocale() {
      const persistedLocale = LocalStorage.getItem('user-locale')
      if (Trans.isLocaleSupported(persistedLocale)) {
         return persistedLocale
      } else {
         return null
      }
   },
}
export default Trans
