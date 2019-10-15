import Vue from 'vue'
import Vuex from 'vuex'
import { getCityId, getCityName} from './utils/local-data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: getCityId(),
    cityName: getCityName()
  },
  mutations: {
    setCityId(state,val){
      state.cityId = val;
    },
    setCityName(state,val){
      state.cityName = val;
    }
  },
  actions: {

  }
})
