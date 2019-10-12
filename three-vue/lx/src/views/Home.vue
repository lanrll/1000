<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="button" value="ajax" @click="qiqiu()">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    qiqiu(){
      axios({
        url: '/api1/users/list',
        method: 'get',
      }).then(res => {
        console.log(res.data)
      })
    }
  },
}
</script>
