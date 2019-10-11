import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 1,
    username: 'admin',
    password: '123'
  },
  mutations: {
    addcount(state) {
      state.count++
    },
    reducecount(state) {
      state.count--
    },
    updateUsername (state, username) {
      state.username = username
    },
    updatePassword (state, password) {
      state.password = password
    },
    login(state){
      axios({
        url: 'http://localhost:9090/user/login',
        method: 'post',
        data: {
          username: state.username,
          pwd: Number(state.password)
        }
      }).then(res => {
        console.log(res)
        if(res.data.code == 0) {
          localStorage.setItem('token',res.data.token)
        }else{
          alert(res.data.msg)
        }
      })
    }
  },
  actions: {
    ybaddcount(context) {
      setTimeout(() => {
        context.commit('addcount')
      }, 1000)
    },
    ybreducecount(context) {
      setTimeout(() => {
        context.commit('reducecount')
      }, 1000)
    },
    userLogin(context) {
      context.commit('login')
    }
  }
})

export default store
