<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div id="nav">
      <router-link to="/">films</router-link> |
      <router-link to="/cinemas">cinemas</router-link> |
      <router-link to="/new">news</router-link> |
      <router-link to="/my">my</router-link>
    </div> -->
    <mz-footer></mz-footer>
  </div>
</template>
<script>
import MzFooter from '@/components/Footer'
export default {
  components: {
    MzFooter
  }
}
</script>
<style lang="scss">

</style>
