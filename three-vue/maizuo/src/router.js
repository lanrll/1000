import Vue from 'vue'
import Router from 'vue-router'
import FilmsIndex from './views/films/Index'
import NowPlaying from './views/films/NowPlaying.vue'
import ComingSoon from './views/films/ComingSoon.vue'
import FilmDetail from '@/views/films/FilmDetail'
import CinemasIndex from './views/cinemas/Index'
import CinemaDetail from './views/cinemas/CinemaDetail.vue'
import CinemaFilmInfo from './views/cinemas/CinemaFilmInfo.vue'
import CityList from './views/city/Index.vue'
import MyIndex from './views/my/Index.vue'
import store from './store'
Vue.use(Router)

const router = new Router({
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
            footerNav: true
          }
        },
        {
          path: 'comingSoon',
          component: ComingSoon,
          meta: {
            lineX: 100,
            footerNav: true
          }
        }
      ]
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: FilmDetail,
    },
    {
      path: '/cinemas',
      component: CinemasIndex,
      meta: {
        footerNav: true
      }
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cinema/:cid',
      component: CinemaDetail,
      children: [{
        path: 'film/:fid/:date',
        component: CinemaFilmInfo,
      }]
    },
    {
      path: '/city',
      component: CityList
    },
    {
      path: '/my',
      component: MyIndex,
      meta: {
        footerNav: true 
      }
    }
  ]
})
let whiteList =  ['/city']
router.beforeEach((to, from, next) => {
  if(whiteList.indexOf(to.path) === -1 && !store.state.cityId){
    next('/city')
    return
  }
  next()
})

export default router