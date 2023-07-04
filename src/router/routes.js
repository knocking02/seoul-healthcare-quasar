import PageNotFound from '../views/error/PageNotFound.vue'
import Login from '../views/Login/Login.vue'
import Main from '../views/main/Main.vue'
import Axios from '@/views/sample/Axios.vue'
import Util from '@/views/sample/Util.vue'
import AmdChart from '@/views/sample/AmdChart.vue'
import Smap from '@/views/sample/Smap.vue'
import Tab from '@/views/sample/Tab.vue'
import Table from '@/views/sample/Table.vue'
import Message from '@/views/sample/Message.vue'
import Form from '@/views/sample/Form.vue'
import Date from '@/views/sample/Date.vue'
import Pagination from '@/views/sample/Pagination.vue'
import ManagerMain from '@/views/main/ManagerMain.vue'
import About from '@/views/about/About.vue'

const routes = [
   {
      path: '/login',
      component: Login,
      meta: {
         name: 'Login',
         layout: 'DefaultLayout',
      },
   },
   {
      path: '/admin',
      children: [
         {
            path: '',
            name: 'main',
            component: Main,
            meta: {
               name: 'Main',
            },
         },
         {
            path: '/admin/axios',
            name: 'axios',
            component: Axios,
            meta: {
               name: 'Axios Test',
            },
         },
         {
            path: '/admin/util',
            name: 'util',
            component: Util,
            meta: {
               name: 'Util Test',
            },
         },
         {
            path: '/admin/amdchart',
            name: 'amdchart',
            component: AmdChart,
            meta: {
               name: 'amdChart Test',
            },
         },
         {
            path: '/admin/smap',
            name: 'smap',
            component: Smap,
            meta: {
               name: 'S-Map Test',
            },
         },
         {
            path: '/admin/tab',
            name: 'tab',
            component: Tab,
            meta: {
               name: 'Tab Test',
            },
         },
         {
            path: '/admin/table',
            name: 'table',
            component: Table,
            meta: {
               name: 'Table Test',
            },
         },
         {
            path: '/admin/pagination',
            name: 'pagination',
            component: Pagination,
            meta: {
               name: 'Pagination Test',
            },
         },
         {
            path: '/admin/message',
            name: 'message',
            component: Message,
            meta: {
               name: 'Message Test',
            },
         },
         {
            path: '/admin/form',
            name: 'form',
            component: Form,
            meta: {
               name: 'Form Test',
            },
         },
         {
            path: '/admin/date',
            name: 'date',
            component: Date,
            meta: {
               name: 'Date Test',
            },
         },
      ],
   },
   {
      path: '/manager',
      children: [
         {
            path: '',
            name: 'ManagerMain',
            component: ManagerMain,
            meta: {
               name: 'Manager Main',
               layout: 'ManagerLayout',
            },
         },
         {
            path: '/manager/about',
            name: 'about',
            component: About,
            meta: {
               name: 'About Test',
               layout: 'ManagerLayout',
            },
         },
      ],
   },
   {
      path: '/notfound',
      component: PageNotFound,
      meta: {
         name: 'Page Not Found',
         layout: 'ErrorLayout',
      },
   },
   { path: '/:catchAll(.*)', redirect: '/notfound' },
   { path: '/', redirect: '/login' },
]

export default routes
