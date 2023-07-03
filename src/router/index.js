import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { Loading } from 'quasar'
import { useAuthStore } from '@/stores/useAuth'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   Loading.show()
   beforeCheck(to, from, next)
})

router.beforeResolve(() => {
   //console.log('beforeResolve')
})

router.afterEach((to, from) => {
   Loading.hide()
})

// login check ....
const beforeCheck = (to, from, next) => {
   // const authStore = useAuthStore()
   // if (!authStore.user) {
   //    //next({name: 'login'})
   // } else {
   //    next()
   // }
   next()
}

export default router
