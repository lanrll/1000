<template>
  <div class="swiper-container banner-wrap">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="(item, index) in data" :key="index">
        <img :src="item.avatarAddress" />
        <p>{{item.name}}</p>
        <p>{{item.role}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["data"],
  data() {
    return {};
  },
  updated(){
    console.log(this.data);
    var swiper = new Swiper(".banner-wrap", {
     slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
    });
  }
};
</script>
<style lang="scss">
@import url("~@/assets/css/swiper.min.css");
</style>