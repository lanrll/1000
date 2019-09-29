import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Magazine from './views/Magazine.vue'
import Magazines from './views/magazines/Index.vue'
import Now from './views/magazines/Now.vue'
import Old from './views/magazines/Old.vue'
import Subscribe from './views/Subscribe.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/magazines',
      name: 'magazines',
      component: Magazines,
      children: [{
        path: '',
        redirect: '/magazines/Now'
      },{
        path: 'Now',
        component: Now
      },{
        path: 'Old',
        component: Old
      }]
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: Subscribe
    },{
      path: '/404',
      component: NotFound
    },{
      path: '*',
      redirect: '/404'
    }
  ]
})
