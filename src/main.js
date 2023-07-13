import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from './modules/axios'
import util from './modules/utils/util'
import constant from './modules/utils/constant'
import validator from './modules/utils/validator'
import dialog from './modules/utils/dialog'
import LoadScript from 'vue-plugin-load-script'
import sha256 from './modules/utils/sha256'
import i18n from './modules/i18n'
import Tr from './modules/i18n/translation'
import { Quasar, Notify, Dialog, Loading, Cookies, LocalStorage, SessionStorage } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import Qcalendar from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/dist/index.css'

import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(axios)
app.use(util)
app.use(constant)
app.use(validator)
app.use(dialog)
app.use(LoadScript)
app.use(Quasar, {
   plugins: {
      Notify,
      Dialog,
      Loading,
      Cookies,
      LocalStorage,
      SessionStorage,
   },
})
app.use(Qcalendar)
app.use(sha256)
app.use(CKEditor)
app.use(i18n)

// 다국어 사용자 설정
const locale = Tr.getUserLocale()
Tr.switchLanguage(locale)

//app.provide('$axios', axios)
app.mount('#app')
