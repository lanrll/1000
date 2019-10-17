import Vue from 'vue'
import Router from 'vue-router'
import FilmsIndex from './views/films/Index'
import NowPlaying from './views/films/NowPlaying.vue'
import ComingSoon from './views/films/ComingSoon.vue'
import FilmDetail from '@/views/films/FilmDetail'
import FilmCinemas from './views/cinemas/FilmCinemas.vue'

import CinemaIndex from './views/cinemas/Index'
import CinemaDetail from './views/cinemas/CinemaDetail.vue'
import CinemaFilmInfo from './views/cinemas/CinemaFilmInfo.vue'
import CinemaSearch from './views/cinemas/CinemaSearch.vue'

import CityList from './views/city/Index.vue'
import MyIndex from './views/my/Index.vue'
import Login from './views/my/Login.vue'

import NewsIndex from './views/news/Index.vue'

import UserOrder from './views/my/FilmOrder.vue'
import UserVolume from './views/my/UserVolume.vue'
import UserRed from './views/my/UserRed.vue'
import UserBalance from './views/my/UserBalance.vue'
import UserSet from './views/my/UserSet.vue'
import UserCommodity from './views/my/UserCommodity.vue'

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
      path: '/film/:id/cinemas',
      name: 'FilmCinemas',
      component: FilmCinemas
    },
    {
      path: '/cinemas',
      component: CinemaIndex,
      meta: {
        footerNav: true
      },
      // children: [{
      //   path: 'search',
      //   component: CinemaSearch,
      // }]
    },
    {
      path: '/cinemas/search',
      component: CinemaSearch,
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
      path: '/news',
      component: NewsIndex,
      meta: {
        footerNav: true
      }
    },
    {
      path: '/my',
      component: MyIndex,
      meta: {
        footerNav: true
      }
    },
    {
      path: '/user/order',
      component: UserOrder,
      meta: {
        title: '电影订单'
      }
    },
    {
      path: '/user/commodity',
      component: UserCommodity,
      meta: {
        title: '商品订单'
      }
    },
    {
      path: '/user/volume',
      component: UserVolume,
      meta: {
        title: '卖座卷'
      }
    },
    {
      path: '/user/red',
      component: UserRed,
      meta: {
        title: '组合红包'
      }
    },
    {
      path: '/user/balance',
      component: UserBalance,
      meta: {
        title: '余额'
      }
    },
    {
      path: '/user/set',
      component: UserSet,
      meta: {
        title: '设置'
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
//首次进入
let whiteList = ['/city']
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) === -1 && !store.state.cityId) {
    next('/city')
    return
  }
  next()
})
//导航重复解决
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router
