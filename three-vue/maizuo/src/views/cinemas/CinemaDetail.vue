<template>
  <div v-if="cinemaInfo">
    <header class="header-title">
      <img src="~@/assets/imgs/back.png" class="go-back" @click="goBack()" />
      <!-- <span class="header-title-center">昆虫总动员2：来自远方的后援军</span> -->
    </header>
    <main>
      <div>{{cinemaInfo.name}}</div>
      <div>
        <span v-for="(item,index) in cinemaInfo.services" :key="index">{{item.name}}</span>
        <!-- {{cinemaInfo.services | operateActors}} -->
      </div>
      <div>
        <span class="fa fa-map-marker"></span>
        <p>{{cinemaInfo.address}}</p>
        <span class="fa fa-phone"></span>
      </div>
    </main>
    <div>
      <cinema-banner :data="cinemaFilms" v-if="cinemaFilms.length" @selectEvt="changeFilm($event)"></cinema-banner>
      <router-view :filmInfo="activeFilmInfo" v-if="activeFilmInfo"></router-view>
    </div>
  </div>
</template>
<script>
import CinemaBanner from "./components/Banner";
import axios from 'axios';
import { getCinemaInfo, getCinemaFilms, getCinemaGpsAddres } from "@/api/cinema";
export default {
  data() {
    return {
      cid: 0,
      cinemaInfo: null,
      cinemaFilms: [],
      cinemaGps: [],
      activeFilmInfo: null
    };
  },
  watch: {
    "$route.params.cid": {
      handler(val) {
        this.cid = val;
        this.getCinemaDetail();
        this.getCinemaFilmLists();
      },
      immediate: true
    }
  },
  methods: {
    //   getCinemaAddres(params){
    //       axios({
    //           url: `https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${params[0]},${params[1]}&coordsys=gps&output=JSON&key=55b14f37d88ac29d9bca2205bdca3cb8`
    //       }).then(res => {
    //           console.log(res)
    //       })
        
    //   },
    getCinemaDetail() {
      getCinemaInfo({ cid: this.cid }).then(res => {
        this.cinemaInfo = res.data.cinema;
        // this.cinemaGps = res.data.cinema.gpsAddress.split(':')
        // let arr = res.data.cinema.gpsAddress.split(':')
        // console.log(arr)
        // for(let i=0;i<arr.length; i++) {
        //     // console.log(item)
        //     let num = Number(arr[i])
        //     // item = item.toPrecision(6)
        //     console.log(num.toPrecision(7))
        //     arr[i] = num.toPrecision(7)
        // }
        // console.log(arr)
        // this.getCinemaAddres(arr);
        // console.log(res.data.cinema);
      });
    },
    getCinemaFilmLists() {
      getCinemaFilms({ cid: this.cid }).then(res => {
        this.cinemaFilms = res.data.films;
        console.log(res.data.films)
      });
    },
    changeFilm(index) {
      // console.log(this.cinemaFilms[index])
      this.activeFilmInfo = this.cinemaFilms[index];
      let date = this.activeFilmInfo.showDate[0];
      this.$router.push(
        `/cinema/${this.cid}/film/${this.activeFilmInfo.filmId}/${date}`
      );
    },
    goBack() {
      history.go(-2);
    }
  },
  components: {
    CinemaBanner
  }
};
</script>
<style lang="scss" scoped>
.header-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  z-index: 9000;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  text-align: center;
  font-size: 0.34rem;
  transition: all 0.3s;
}
.header-title .go-back {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
main {
  margin-top: 0.88rem;
  div {
    &:nth-child(1) {
      font-size: .35rem;
      text-align: center;
      height: .88rem;
      line-height: .88rem;
      color: #191a1b;
    }
    &:nth-child(2){
        font-size: .3rem;
        color: #ffb232;
        padding: .1rem 0 .3rem;
        text-align: center;
        border-bottom: .02rem solid #ededed;
        span{
            padding:  0 .12rem;
            margin: 0 .05rem;
            font-size: .2rem;
            border: .02rem solid #ffb232;
        }
    }
    &:nth-child(3){
        height: 1rem;
        padding: 0 .5rem; 
        font-size: .45rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: .3rem;
            display: block;
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
  }
}
</style>