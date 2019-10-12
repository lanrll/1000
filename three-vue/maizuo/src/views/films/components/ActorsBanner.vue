<template>
  <div class="swiper-container banner-wrap-actors">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in data" :key="index">
        <img :src="item.avatarAddress" />
        <p>{{item.name}}</p>
        <p>{{item.role}}</p>
      </div>
    </div>
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
    var swiper = new Swiper(".banner-wrap-actors", {
       slidesPerView: 4,
      spaceBetween: 30,
    });
  }
};
</script>
<style lang="scss" scoped>
@import url("~@/assets/css/swiper.min.css");
.banner-wrap-actors {
  height: 2.6rem;
  background: rgb(255, 255, 255);
  .swiper-wrapper {
    padding: 0 0.3rem;
    .swiper-slide {
      img {
        width: 100%;
      }
      p {
        margin-top: 0.1rem;
        font-size: 0.2rem;
        text-align: center;
        &:nth-child(3) {
          color: #797d82;
        }
      }
    }
  }
}
</style>