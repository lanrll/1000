<template>
  <div id="app">
    <div>
      <Nav></Nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "home",
  components: {
    Nav,
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
}
</style>
