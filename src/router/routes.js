import PageNotFound from '../views/error/PageNotFound.vue'
import MainLayout from '../components/layout/MainLayout.vue'
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

const routes = [
   {
      path: '/',
      component: MainLayout,
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
            path: '/axios',
            name: 'axios',
            component: Axios,
            meta: {
               name: 'Axios Test',
            },
         },
         {
            path: '/util',
            name: 'util',
            component: Util,
            meta: {
               name: 'Util Test',
            },
         },
         {
            path: '/amdchart',
            name: 'amdchart',
            component: AmdChart,
            meta: {
               name: 'amdChart Test',
            },
         },
         {
            path: '/smap',
            name: 'smap',
            component: Smap,
            meta: {
               name: 'S-Map Test',
            },
         },
         {
            path: '/tab',
            name: 'tab',
            component: Tab,
            meta: {
               name: 'Tab Test',
            },
         },
         {
            path: '/table',
            name: 'table',
            component: Table,
            meta: {
               name: 'Table Test',
            },
         },
         {
            path: '/message',
            name: 'message',
            component: Message,
            meta: {
               name: 'Message Test',
            },
         },
         {
            path: '/form',
            name: 'form',
            component: Form,
            meta: {
               name: 'Form Test',
            },
         },
         {
            path: '/date',
            name: 'date',
            component: Date,
            meta: {
               name: 'Date Test',
            },
         },
         { path: '/notfound', component: PageNotFound },
         { path: '/:catchAll(.*)', redirect: '/notfound' },
      ],
   },
]

export default routes
