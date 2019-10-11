<template>
  <div class="swiper-container banner-wrap">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data" :key="item.bannerId">
        <router-link :to="'/film/'+  item.actionData.match(/[0-9]+/)">
          <img :src="item.imgUrl" />
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["data"],
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper(".banner-wrap", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
@import url("~@/assets/css/swiper.min.css");
.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}
.banner-wrap img {
  width: 100%;
}
</style>