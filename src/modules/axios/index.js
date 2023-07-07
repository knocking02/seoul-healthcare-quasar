import sampleApi from './sampleApi'
import smapApi from './smapApi'

const serviceApi = Object.assign(sampleApi, smapApi)

export default {
   install: (app, options = {}) => {
      app.config.globalProperties.$axios = serviceApi
   },
}
