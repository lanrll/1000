import Vue from 'vue'
import Vuex from 'vuex'
import { getCityId, getCityName,getUserData,} from './utils/local-data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: getCityId(),
    cityName: getCityName(),
    userInfo: getUserData(),
  },
  mutations: {
    setCityId(state,val){
      state.cityId = val;
    },
    setCityName(state,val){
      state.cityName = val;
    },
    setUserinfo(state,val){
      state.userInfo = val
    },
  },
  actions: {

  }
})
