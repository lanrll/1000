import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Terminal from './views/Terminal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path: '/terminal',
      // name: 'terminal',
      component: Terminal
      // component: () => import(/* webpackChunkName: "about" */ './views/Terminal.vue')
    },
    {
      path: '/wife',
      component: () => import('./views/Wife.vue')
    },
    {
      path: '/storage',
      component: () => import( './views/Storage.vue')
    },
    {
      path: '/advanced',
      component: () => import('./views/Advanced.vue')
    },
  ]
})
