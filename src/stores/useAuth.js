import { defineStore } from 'pinia'
import router from '../router'

export const useAuthStore = defineStore({
   id: 'useAuth',
   state: () => ({
      user: localStorage.getItem('user'),
   }),
   actions: {
      async login(id, password) {
         try {
            // TOTO : axios api login check

            if (id.value !== 'admin' || password.value !== '1234') {
               localStorage.removeItem('user')
               this.$dialog.open({
                  type: 'error',
                  message: 'Incorrect login ID or password',
               })
            } else {
               localStorage.setItem('user', {
                  id: id,
                  name: '홍길동',
                  mobile: '01012345678',
               })
               router.push('/main')
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
      localStorage.removeItem('user')
      router.push('/')
   },
})
