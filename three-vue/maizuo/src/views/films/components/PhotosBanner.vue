<template>
  <div>
    <div class="photos">
      <b>剧照部分</b>
      <span>全部{{data.length}} ></span>
    </div>
    <div class="swiper-container banner-wrap">
      <div class="swiper-container banner-wrap">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in data" :key="index" style="width:3rem">
            <img :src="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    console.log(this.data);
    return {};
  },
  updated() {
    console.log(this.data);
    var swiper = new Swiper(".banner-wrap", {
      slidesPerView: 2,
    //   slidesPerView: "auto",
      spaceBetween: 10,
      freeMode: true
    });
  }
};
</script>