import { util } from './util'

const validator = {
   checkEmpty: (val, message) => !util.isEmpty(val) || message,
   checkAge: (val, message) => (val > 0 && val < 100) || message,
}

export default {
   install: (app) => {
      app.config.globalProperties.$validator = validator
   },
}
