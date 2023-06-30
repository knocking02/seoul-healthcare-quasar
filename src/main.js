import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './modules/axios'
import util from './modules/utils/util'
import constant from './modules/utils/constant'
import validator from './modules/utils/validator'
import LoadScript from 'vue-plugin-load-script'
import { Quasar } from 'quasar'
import { Notify } from '/node_modules/quasar/dist/quasar.esm.js'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios)
app.use(util)
app.use(constant)
app.use(validator)
app.use(LoadScript)
app.use(Quasar, {
   plugins: { Notify },
})

app.mount('#app')
