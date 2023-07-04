import { defineStore } from 'pinia'
import router from '../../router'
import { LocalStorage, SessionStorage } from 'quasar'

export const useAuthStore = defineStore({
   id: 'useAuth',
   state: () => ({
      user: SessionStorage.getItem('user'),
   }),
   actions: {
      async login(id, password, authType) {
         try {
            // TOTO : axios api login check

            if (id !== 'admin' || password !== '1234') {
               SessionStorage.remove('user')
               this.$dialog.open({
                  type: 'error',
                  message: 'Incorrect login ID or password',
               })
            } else {
               SessionStorage.set('user', {
                  id: id,
                  name: '홍길동',
                  mobile: '01012345678',
               })

               if (authType === 'admin') {
                  router.push('/admin')
               } else {
                  router.push('/manager')
               }
            }
         } catch (error) {
            this.$dialog.open({
               type: 'alert',
               message: 'Incorrect login ID or password',
            })
         }
      },
   },
   logout() {
      user = null
      SessionStorage.remove('user')
      router.push('/')
   },
})
