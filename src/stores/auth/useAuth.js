import { defineStore } from 'pinia'
import router from '../../router'
import { SessionStorage } from 'quasar'
import { ref } from 'vue'

export const useAuthStore = defineStore('useAuth', () => {
   const user = ref(SessionStorage.getItem('user'))

   async function login(id, password, authType) {
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
               authType: authType,
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
   }

   function logout() {
      user = null
      SessionStorage.remove('user')
      router.push('/login')
   }

   return { user, login, logout }
})
