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
import Editor from '@/views/sample/Editor.vue'
import Calendar from '@/views/sample/Calendar.vue'
import I18N from '@/views/sample/I18N.vue'
//import i18n from '@/modules/i18n'
//const { t: $t, d: $d, n: $n } = i18n.global

const routes = [
   {
      path: '/login',
      name: 'Login',
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
            name: 'Main',
            component: Main,
            meta: {
               name: 'Main',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/axios',
            name: 'Axios',
            component: Axios,
            meta: {
               name: 'Axios Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/util',
            name: 'Util',
            component: Util,
            meta: {
               name: 'Util Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/amdchart',
            name: 'Amdchart',
            component: AmdChart,
            meta: {
               name: 'amdChart Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/smap',
            name: 'Smap',
            component: Smap,
            meta: {
               name: 'S-Map Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/tab',
            name: 'Tab',
            component: Tab,
            meta: {
               name: 'Tab Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/table',
            name: 'Table',
            component: Table,
            meta: {
               name: 'Table Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/pagination',
            name: 'Pagination',
            component: Pagination,
            meta: {
               name: 'Pagination Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/editor',
            name: 'Editor',
            component: Editor,
            meta: {
               name: 'Quasar Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/form',
            name: 'Form',
            component: Form,
            meta: {
               name: 'Form Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/date',
            name: 'Date',
            component: Date,
            meta: {
               name: 'Date Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/calendar',
            name: 'Calendar',
            component: Calendar,
            meta: {
               name: 'Calendar Test',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/message',
            name: 'Message',
            component: Message,
            meta: {
               name: '공통 메세지',
               authType: 'admin',
               layout: 'AdminLayout',
            },
         },
         {
            path: '/admin/i18n',
            name: 'I18N',
            component: I18N,
            meta: {
               name: '다국어 변환',
               authType: 'admin',
               layout: 'AdminLayout',
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
               authType: 'manager',
               layout: 'ManagerLayout',
            },
         },
         {
            path: '/manager/about',
            name: 'About',
            component: About,
            meta: {
               name: 'About Test',
               layout: 'ManagerLayout',
               authType: 'manager',
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
