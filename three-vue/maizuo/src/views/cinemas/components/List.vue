<template>
  <div>
    <ul class="cinema-lists">
      <li v-for="item in areaList" :key="item.cinemaId">
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
  </div>
</template>
<script>
import { getCinemaList } from "@/api/cinema";
export default {
  props: ["data", "keyw"],
  data() {
    console.log(1)
    return {
      dataLists: [],
      area: []
      // areaList: []
    };
  },
  computed: {
    areaList() {
      var arr = [];
      var brr = [];
      let key = 0;
      console.log(this.keyw);
      console.log(this.data);
      // console.log(this.dataLists);
      if (this.data.length > 0) {
        this.dataLists.forEach(el => {
          if (el.districtName == this.data) {
            arr.push(el);
          }
        });
        if (this.data == "全城") {
          if (this.keyw.length > 0) {
            arr = [];
            this.dataLists.forEach(el => {
              if (el.name.includes(this.keyw)) {
                arr.push(el);
              }
            });
          } else {
            arr = this.dataLists;
          }
        }
      }
      console.log(arr);
      return arr;
      // return this.dataLists
      // this.dataLists.forEach(el => {
      //   if (el.districtName === this.data) {
      //     arr.push(el);
      //     key = 2;
      //   }
      //   // if (this.keyw.length>0) {
      //   //   key = 1;
      //   // }
      //   if (reg.test(el.name)) {
      //     // console.log(1);
      //     arr.push(el);
      //     key = 2;
      //   } else if (this.keyw.length > 0) {
      //     key = 1;
      //   }
      // });
      // console.log(key);
      // if (key == 0) {
      //   return (arr = this.dataLists);
      // } else if (key == 1) {
      //   return (arr = []);
      // } else if (key == 2) {
      //   return arr;
      // }
    }
  },
  created() {
    this.getData();
    console.log(1)
  },
  methods: {
    getData() {
      getCinemaList(this.$store.state.cityId).then(res => {
        this.dataLists = res.data.cinemas;
        this.firstList = res.data.cinemas.slice(0, 6);
        this.dataLists.forEach(el => {
          if (this.area.indexOf(el.districtName) == -1) {
            this.area.push(el.districtName);
          }
        });
        this.$emit("Administrative", this.area);
      });
      // console.log(this.area);
    }
  }
};
</script>
<style lang="scss" scoped>
.cinema-lists {
  font-size: 0.3rem;
  margin-bottom: 1rem;
  li {
    width: 100%;
    padding: 0.3rem;
    border-bottom: 0.02rem solid #ededed;
    display: inline-block;
    // float: left;
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
            font-size: 0.3rem;
            color: #ff5f16;
          }
          &:nth-child(2) {
            margin-top: 0.1rem;
            color: #797d82;
          }
        }
      }
    }
  }
}
</style>