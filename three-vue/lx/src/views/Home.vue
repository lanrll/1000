<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>当前计数：{{$store.state.count}}</h2>
    <h2>当前计数：{{free}}</h2>
    <h2>当前计数：{{count}}</h2>
    <p>
      <input type="button" value="减" @click="reduce()">
      <input type="button" value="加" @click="add()">
    </p>
    <p>
      <input type="button" value="减" @click="ybreduce()">
      <input type="button" value="加" @click="ybadd()">
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    free(){
      return this.$store.state.count
    },
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['addcount','reducecount']),
    ...mapActions(['ybaddcount','ybreducecount']),
    add(){
      this.addcount()
    },
    reduce(){
      this.reducecount()
    },
    ybadd(){
      this.ybaddcount()
    },
    ybreduce(){
      this.ybreducecount()
    }
  },
}
</script>
