<template>
  <div class="swiper-container banner-wrap-actors">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in data" :key="index">
        <div>
        <img :src="item.avatarAddress"/>
        </div>
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
      spaceBetween: 20,
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
      div{
        width: 100%;
        height: 1.7rem;
        overflow: hidden;
        text-align: center;
        line-height: 1rem;
        position: relative;
      img {
        width: 100%;
        position: absolute;
        top: -15%;
        left: 0;
      }
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