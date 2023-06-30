import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   // console.log('to', to)
   // console.log('from', from)
   // console.log('next', next)

   beforeCheck(to, from, next)
})

const beforeCheck = (to, from, next) => {
   // 로그인 체크

   next()
}

export default router
