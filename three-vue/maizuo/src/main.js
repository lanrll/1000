import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset1.css'
import '@/assets/font-awesome/css/font-awesome.min.css'

import * as filters  from './filters/index';

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
// import {Button, List, Sticky, Tabbar, TabbarItem, ImagePreview, NavBar, Icon, DropdownMenu, DropdownItem, Tag, Tab, Tabs, IndexBar, IndexAnchor, Cell, Search, CellGroup, Image} from 'vant';
// Vue.use(Button).use(List).use(Sticky).use(Tabbar).use(TabbarItem).use(ImagePreview).use(NavBar).use(Icon).use(DropdownMenu).use(DropdownItem).use(Tag).use(Tab).use(Tabs).use(IndexBar).use(IndexAnchor).use(Cell).use(Search).use(CellGroup).use(Image)

for(let key in filters){
  Vue.filter(key,filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
