import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from './modules/axios/axios'
import util from './modules/utils/util'
import constant from './modules/utils/constant'
import validator from './modules/utils/validator'
import dialog from './modules/utils/dialog'
import LoadScript from 'vue-plugin-load-script'
import { Quasar, Notify, Dialog, Loading, Cookies, LocalStorage, SessionStorage } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(({ store }) => {
   store.$http = app.config.globalProperties.$http
   store.$dialog = app.config.globalProperties.$dialog
})

app.use(pinia)
app.use(router)
//app.use(axios)
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

app.provide('$axios', axios)

app.mount('#app')
