import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { Loading } from 'quasar'
import useStore from '@/stores'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   Loading.show()
   beforeCheck(to, from, next)
})

router.beforeResolve((to) => {
   // const store = useStore()
   // if (store.auth.user && to.fullPath.indexOf('/' + store.auth.user.authType) === -1 && !to.meta.isNotAuthCheck)
   //    return false
})

router.afterEach((to, from) => {
   Loading.hide()
})

// login check ....
const beforeCheck = (to, from, next) => {
   const store = useStore()
   if (!store.auth.user && to.name !== 'Login') {
      next({ name: 'Login' })
      return
   } else {
      next()
   }
}

export default router
