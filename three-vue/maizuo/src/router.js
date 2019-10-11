import Vue from 'vue'
import Router from 'vue-router'
import FilmsIndex from './views/films/Index'
import NowPlaying from './views/films/NowPlaying.vue'
import ComingSoon from './views/films/ComingSoon.vue'
import FilmDetail from '@/views/films/FilmDetail'
import CinemasIndex from './views/cinemas/Index'
import CinemaDetail from './views/cinemas/CinemaDetail.vue'
import CinemaFilmInfo from './views/cinemas/CinemaFilmInfo.vue'

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
          component: NowPlaying,
          meta: {
            lineX: 0,
            footerNav: 0
          }
        },
        {
          path: 'comingSoon',
          component: ComingSoon,
          meta: {
            lineX: 100
          }
        }
      ]
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: FilmDetail,
      meta: {
        footerNav: 1
      }
    },
    {
      path: '/cinemas',
      component: CinemasIndex,
      meta: {
        footerNav: 0
      }
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cinema/:cid',
      component: CinemaDetail,
      children: [{
        path: 'film/:fid/:date',
        component: CinemaFilmInfo,
        meta:{
          footerNav: 1
        }
      }]
    },
  ]
})
