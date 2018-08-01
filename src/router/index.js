import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'disabled active',
  routes: [
    {
      path: '/',
      redirect: '/webtask/home',
      name: 'root'
    },
    {
      path: '/webtask/home',
      name: 'home',
      component: () => import('@/components/Home/Index')
    },
    {
      path: '/webtask/about',
      name: 'about',
      component: () => import('@/components/About/Index')
    },
    {
      path: '/webtask/contact',
      name: 'contact',
      component: () => import('@/components/Contact/Index')
    },
    {
      path: '*',
      component: () => import('@/components/Global/NotFound')
    }
  ]
})
