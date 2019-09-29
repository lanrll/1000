<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <main>
    <router-view/>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
   name: 'home',
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  margin: 0 auto;
}
#nav {
  padding: 0 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main{
  margin:  20px;
  font-size: 20px;
}
</style>
