<template>
  <div>
    <van-nav-bar :title="cinema.name" left-arrow @click-left="onClickLeft" />
    <van-cell :title="film.name" :label="`${showDate} ${film.language} ${schedule.imagery}`" />
    <div>

    </div>
  </div>
</template>
<script>
import {getSchedule, getScheduleData} from '@/api/cinema.js'
export default {
    data() {
        return {
            schedule:{},
            film:{},
            showDate:'',
            cinema:{},
        }
    },
    created() {
        this.getSche()
    },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    getSche(){
        // console.log(this.$route.params.sd)
        getSchedule(this.$route.params.sd).then(res => {
            this.schedule = res.data.schedule
            this.film = res.data.schedule.film
            this.cinema = res.data.schedule.cinema
            let date =  new Date( res.data.schedule.showAt * 1000)
            let da = date.toLocaleString()
            this.showDate = da
            console.log(res)
        })
        // rowNum 行号
        // columnNum 列号
        getScheduleData(this.$route.params.sd).then(res => {
            console.log(res)
        })
        // getSchedule()
    }
  }
};
</script>