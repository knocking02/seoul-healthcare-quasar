import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { Loading } from 'quasar'

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
   next()
}

export default router
