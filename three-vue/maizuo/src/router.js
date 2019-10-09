import Vue from 'vue'
import Router from 'vue-router'
import FilmsIndex from './views/films/Index'
import NowPlaying from './views/films/NowPlaying.vue'
import ComingSoon from './views/films/ComingSoon.vue'
import FilmDetail from '@/views/films/FilmDetail'
import CinemasIndex from './views/cinemas/Index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/films'
    },
    {
      path: '/films',
      component: FilmsIndex,
      children: [{
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'nowPlaying',
          component: NowPlaying
        },
        {
          path: 'comingSoon',
          component: ComingSoon
        }
      ]
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: FilmDetail
    },
    {
      path: '/cinemas',
      component: CinemasIndex
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
