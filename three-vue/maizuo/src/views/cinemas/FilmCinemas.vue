<template>
  <div>
    <!-- <div> -->
    <van-sticky>
      <van-nav-bar
        sticky
        :title="filmName"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </van-sticky>
    <van-tabs v-model="active" @click="onClick">
      <van-dropdown-menu>
        <van-dropdown-item :title="value3" ref="item">
          <!-- <van-tag v-for="(item,i) in qu" :key="i" class="qu">{{item}}</van-tag> -->
          <b
            v-for="(item,i) in qu"
            :key="i"
            class="qu"
            :class="value3 == item ? 'ac' : ''"
            @click="changeArea(item)"
          >{{item}}</b>
          <!-- <van-button color="rgba(210,214,220,.5)" v-for="(item,i) in qu" :key="i" class="qu">{{item}}</van-button> -->
          <!-- <van-button block type="info" @click="onConfirm">确认</van-button> -->
        </van-dropdown-item>
        <van-dropdown-item v-model="value1" :options="option1" />
        <!-- <van-dropdown-item v-model="value2" :options="option2" /> -->
      </van-dropdown-menu>
      <van-tab v-for="(item,index) in data" :key="index">
        <div slot="title" :key="item.showDate">{{item.showDate | formatDate}}</div>
        <cinema-list @Administrative="area($event)" :data="value3" keyw :cinemas="cinemasList" ></cinema-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getFilmDetail, getFilmPlayCinema } from "@/api/film.js";
import { getTimeCinemaList } from "@/api/cinema.js";
import { getFilmTimeCinema } from "@/api/city.js";
import CinemaList from "./components/List";
export default {
  data() {
    return {
      filmName: "",
      data: "",
      active: 0,
      value3: "全城",
      value1: 0,
      cinemas: [],
      option1: [{ text: "APP订票", value: 0 }, { text: "前台兑换", value: 1 }],
      qu: ["全城"]
    };
  },
  computed: {
    cinemasList() {
      return this.cinemas;
    }
  },
  created() {
    this.film();
  },
  methods: {
    film() {
      // console.log(this.$route.params);
      getFilmDetail(this.$route.params).then(res => {
        this.filmName = res.data.film.name;
        this.$store.commit('setFilmId',res.data.film.filmId)
        getFilmPlayCinema(res.data.film.filmId, this.$store.state.cityId).then(
          res => {
            let data = res.data.showCinemas;
            for (let i = 0; i < data.length - 1; i++) {
              for (let j = 0; j < data.length - 1 - i; j++) {
                if (data[j].showDate > data[j + 1].showDate) {
                  let temp = data[j + 1];
                  data[j + 1] = data[j];
                  data[j] = temp;
                }
              }
            }
            let str = "";
            this.data = data;
            // console.log(data);
            data[this.active].cinemaList.forEach(item => {
              str += item + ",";
            });
            getTimeCinemaList(this.$store.state.cityId, str).then(res => {
              // console.log(0, res);
              this.cinemas = res.data.cinemas;
            });
          }
        );
      });
    },
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {
      this.$router.push("/cinemas/search");
    },
    onClick() {
      let str = "";
      this.data[this.active].cinemaList.forEach(item => {
        str += item + ",";
      });
      getTimeCinemaList(this.$store.state.cityId, str).then(res => {
        // console.log(333, res);
        this.cinemas = res.data.cinemas;
        this.value3 = "全城";
      });
    },
    area(val) {
      val.forEach(el => {
        if (this.qu.indexOf(el) === -1) {
          this.qu.push(el);
        }
      });
    },
    changeArea(val) {
      this.value3 = val;
      this.$refs.item.toggle();
    }
  },
  components: {
    CinemaList
  }
};
</script>