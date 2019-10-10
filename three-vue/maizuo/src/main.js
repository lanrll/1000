import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset1.css'
import '@/assets/font-awesome/css/font-awesome.min.css'

import * as filters  from './filters/index';

import {Button, List, Sticky, Tabbar, TabbarItem} from 'vant';
Vue.use(Button).use(List).use(Sticky).use(Tabbar).use(TabbarItem)

for(let key in filters){
  Vue.filter(key,filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
