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
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

export default router
