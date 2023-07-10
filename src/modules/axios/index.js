import sampleApi from './api/sampleApi'
import smapApi from './api/smapApi'

const serviceApi = Object.assign(sampleApi, smapApi)

export default {
   install: (app, options = {}) => {
      app.config.globalProperties.$axios = serviceApi
   },
}
