<template>
  <div>
    <!-- <button @click="film">1</button> -->
    <!-- <button @click="">2</button> -->
    <!-- <button>3</button> -->
    <!-- <button>4</button> -->
  </div>
</template>
<script>
import { getFilmDetail, getFilmPlayCinema } from "@/api/film.js";
import { getTimeCinemaList } from "@/api/cinema.js";
import { getFilmTimeCinema } from "@/api/city.js";
export default {
  data() {
    return {
      filmName: ""
    };
  },
  created() {
    this.film();
  },
  methods: {
    film() {
      console.log(this.$router.history.current.params.id);
      getFilmDetail(this.$router.history.current.params).then(res => {
        console.log(1,res)
        this.filmName = res.data.film.name;
        console.log(res.data.film.filmId)
        getFilmPlayCinema(res.data.film.filmId, this.$store.state.cityId).then(
          res => {
            console.log(2,res);
            getFilmTimeCinema(this.$store.state.cityId).then(res => {
              console.log(3,res);
              getTimeCinemaList().then(res => {
                console.log(4,res);
              });
            });
          }
        );
      });
    }
    // getFilmTime() {
    //   getFilmTimeCinema(this.$store.state.cityId).then(res => {
    //     console.log(res);
    //     getFilmPlayCinema();
    //     getTimeCinemaList().then(res => {
    //       console.log(res);
    //     });
    //   });
    // },
    // getCinemaList() {
    //   getTimeCinemaList().then(res => {
    //     console.log(res);
    //   });
    // }
  },
  component: {}
};
</script>