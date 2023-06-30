import { Dialog } from 'quasar'
import CustomDialog from '@/components/dialog/CustomDialog.vue'

const dialog = {
   open(type, message, callFnc) {
      Dialog.create({
         component: CustomDialog,

         componentProps: {
            type: type,
            message: message,
         },
      })
         .onOk(() => {
            if (type == 'confirm' && typeof callFnc === 'function') {
               callFnc()
            }
         })
         .onCancel(() => {
            //console.log('Cancel')
         })
         .onDismiss(() => {
            //console.log('Called on OK or Cancel')
         })
   },
}

export default {
   install: (app) => {
      app.config.globalProperties.$dialog = dialog
   },
}
