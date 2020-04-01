import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import NewContact from '@/components/NewContact'//新添加
import PlayList from '@/components/PlayList'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: '牟Q音乐'
      }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue'),
    meta: {
        title: '帮助'
      }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
        title: '关于'
      }
  },
  // {
  //       path: '/newcontact',//和router-link to相呼应，导航到/newcontact
  //       name: 'NewContact',
  //       component: NewContact
  // },
  {
        path: '/playlist',//和router-link to相呼应，导航到/playlist
        name: 'PlayList',
        component: PlayList
  },
]

const router = new VueRouter({
  routes
})

// 调用beforeEach方法，保证每个路由跳转时都将其跳转的路由推给百度统计
router.beforeEach((to, from, next) => {
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})

export default router
