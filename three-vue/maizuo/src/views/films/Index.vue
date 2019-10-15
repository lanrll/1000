<template>
  <div class="film-list">
    <banner :data="bannerLists" v-if="bannerLists.length"></banner>
    <van-sticky @scroll="topShow">
      <nav v-show="isok">
        <router-link to="/city">
        <div>
          {{$store.state.cityName}}
          <span class="fa fa-angle-down"></span>
        </div>
        </router-link>
        <div>电影</div>
      </nav>
      <tab-nav></tab-nav>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>
<script>
import Banner from "./components/Banner";
import TabNav from "./components/TabNav";
import { getFilmBannerList } from "@/api/film";
export default {
  data() {
    return {
      bannerLists: [],
      isok: false
    };
  },
  created() {
    this.getBannerData();
  },
  components: {
    Banner,
    TabNav
  },
  methods: {
    getBannerData() {
      getFilmBannerList().then(res => {
        if (res.status == 0) {
          this.bannerLists = res.data;
        }
      });
    },
    topShow(val) {
      // console.log(val);
      // if(val.scrollTop>=300){
        this.isok = val.isFixed
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  font-size: 0.35rem;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 3000;
  background-color: #fff;
  border-bottom: 0.02rem solid #ededed;
  div {
    &:nth-child(1) {
      margin-left: 0.3rem;
      float: left;
      margin-right: 0.3rem;
    }
    &:nth-child(2) {
      width: 1rem;
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>