import { defineStore } from 'pinia'
import router from '../../router'
import { dialog } from '@/modules/utils/dialog'
import { ref } from 'vue'

export const useAuthStore = defineStore(
   'useAuth',
   () => {
      const user = ref(null)

      async function login(id, password, authType) {
         try {
            // TODO : axios api login check

            if (id !== 'admin' || password !== '1234') {
               user.value = null
               dialog.open({
                  type: 'error',
                  message: 'Incorrect login ID or password',
               })
            } else {
               user.value = {
                  id: id,
                  authType: authType,
               }

               if (authType === 'admin') {
                  router.push('/admin')
               } else {
                  router.push('/manager')
               }
            }
         } catch (error) {
            dialog.open({
               type: 'alert',
               message: 'Incorrect login ID or password',
            })
         }
      }

      function logout() {
         user.value = null
         router.push('/login')
      }

      return { user, login, logout }
   },
   {
      persist: {
         storage: sessionStorage,
      },
   },
)
