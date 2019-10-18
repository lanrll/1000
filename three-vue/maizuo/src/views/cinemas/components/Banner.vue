<template>
  <div class="swiper-container cinema-detail-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data" :key="item.filmId">
        <img :src="item.poster" />
      </div>
    </div>
    <div class="bgc">
      <img :src="poster" />
    </div>
    <div class="down fa fa-caret-up"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["data"],
  data() {
    return {
      index: ""
    };
  },
  mounted() {
    this.initSwiper();
  },
  computed: {
    poster(){
      let data = ''
      this.data.forEach((item,index) => {
        if(index == this.index){
          // console.log(item.poster)
          data = item.poster
        }
        // console.log(item.poster,this.index)
      })
      // let src = data.poster
      return data
    }
  },
  methods: {
    initSwiper() {
      let _this = this;
      var swiper = new Swiper(".cinema-detail-banner", {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        on: {
          transitionEnd: function() {
            _this.$emit("selectEvt", this.activeIndex);
            // console.log(this.activeIndex);
            // console.log( this.data);
            _this.index = this.activeIndex
          }
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import url("~@/assets/css/swiper.min.css");
.cinema-detail-banner {
  height: 3.2rem;
  position: relative;
  .bgc {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
      width: 100%;
      position: absolute;
      top: -50%;
      filter: blur(1rem);
    }
  }
  .down{
    position: absolute;
    bottom: 0.4rem;
    left: 47%;
    height: .2rem;
    width: .2rem;
    color: #ffffff;
    font-size: 1rem;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    height: 2.6rem;
    width: 1.8rem;
    transition: 300ms;
    transform: scale(0.8);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>