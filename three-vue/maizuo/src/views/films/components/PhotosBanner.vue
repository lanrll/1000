<template>
  <div>
    <div class="swiper-container banner-wrap-photos">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <img :src="item" @click="photoshow(index)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { ImagePreview } from 'vant';
export default {
  props: ["data"],
  data() {
    return {};
  },
  mounted() {
    // console.log(this.data);
    var swiper = new Swiper(".banner-wrap-photos", {
      slidesPerView: 2,
      spaceBetween: 10
    });
  },
  methods: {
    photoshow(index) {
      ImagePreview({
        images: this.data,
        startPosition: index,
      });
    },
  }
};
</script>
<style lang="scss">
@import url("~@/assets/css/swiper.min.css");
.banner-wrap-photos {
  height: 2.3rem;
  background: rgb(255, 255, 255);
  padding-left: 0.3rem;
  .swiper-wrapper {
    .swiper-slide {
      width: 3rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>