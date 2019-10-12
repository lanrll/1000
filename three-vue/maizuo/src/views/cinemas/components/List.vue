<template>
  <ul class="cinema-lists">
    <li v-for="item in dataLists" :key="item.cinemaId">
      <router-link :to="`/cinema/${item.cinemaId}`" class="cineams">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </div>
        <div>
          <p>￥{{item.lowPrice/100}}起</p>
          <p>距离未知</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
import { getCinemaList } from "@/api/cinema";
export default {
  data() {
    return {
      dataLists: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getCinemaList().then(res => {
        this.dataLists = res.data.cinemas;
        console.log(res.data.cinemas);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cinema-lists {
  font-size: 0.3rem;
  li {
    width: 100%;
    padding: 0.3rem;
    border-bottom: 0.02rem solid #ededed;
    float: left;
    box-sizing: border-box;
  }
  .cineams {
    display: block;
    width: 100%;
    height: 100%;
    div {
      &:nth-child(1) {
        width: 5rem;
        text-align: left;
        float: left;
        p {
            display: block;
          &:nth-child(1) {
            color: #191a1b;
            font-size: 0.3rem;
            float: left;
            width: 100%;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-child(2) {
            color: #797d82;
            font-size: 0.24rem;
            margin-top: 0.1rem;
            float: left;
            width: 100%;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      &:nth-child(2) {
        width: 1.4rem;
        text-align: center;
        float: right;
        margin-right: -5px;
        p {
          &:nth-child(1) {
            font-size: .3rem;
            color: #ff5f16;
          }
          &:nth-child(2){
              margin-top: .1rem;
              color: #797d82;
          }
        }
      }
    }
  }
}
</style>