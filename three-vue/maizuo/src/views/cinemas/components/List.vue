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
            <p>{{item.dis}}Km</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCinemaList } from "@/api/cinema";
import location from "@/utils/locations";
import axios from "axios";
export default {
  props: ["data", "keyw", "cinemas"],
  data() {
    // console.log(1)
    return {
      dataLists: [],
      area: [],
      addres1: [],
      addres2: []
      // areaList: []
    };
  },
  computed: {
    areaList() {
      var arr = [];
      var brr = [];
      let key = 0;
      // console.log(this.keyw);
      // console.log(this.data);
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
      // console.log(arr);
      // for (let i = 0; i < arr.length - 1; i++) {
      //         for (let j = 1; j < arr.length - 1 - i; j++) {
      //           if (arr[j].dis > arr[j + 1].dis) {
      //             let temp = arr[j + 1];
      //             arr[j + 1] = arr[j];
      //             arr[j] = temp;
      //           }
      //         }
      //       }
      arr.sort(this.compare("dis"))
      console.log(arr[0])
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
    location.coordinate("container", res => {
      let brr = [res.position.lng, res.position.lat];
      this.dataLists = this.dataLists.map(el => {
        let ds = location.distance(el.gpsAddress.split(":"), brr);
        // console.log(ds);
        ds = Number((ds / 1000).toFixed(2))
        return { ...el, dis:  ds};
      });
      // console.log(this.addres1)
    });
    this.getData();
    // console.log(1)
  },
  methods: {
    getData() {
      getCinemaList(this.$store.state.cityId).then(res => {
        this.firstList = res.data.cinemas.slice(0, 6);
        if (this.cinemas) {
          this.dataLists = this.cinemas;
        } else {
          this.dataLists = res.data.cinemas;
        }
        this.dataLists.forEach(el => {
          if (this.area.indexOf(el.districtName) == -1) {
            this.area.push(el.districtName);
          }
        });
        // let aa = this.dataLists[0];
        // console.log(aa)
        // this.dataLists.forEach(item => {
        // let arr = aa.gpsAddress.split(":");
        // console.log(arr)
        // arr = this.getCinemaAddres(arr);
        // console.log(this.getCinemaAddres(arr))
        // location.coordinate("container", res => {
        // let brr = [res.position.lng, res.position.lat];
        // console.log(res.position);
        // console.log(this.addres1, this.addres2);
        // let ds = location.distance(arr, brr);
        // this.dataLists[0] = {...this.dataLists[0],dis:ds}
        // console.log(ds);
        // console.log(this.dataLists[0])
        // });
        // });
        // console.log(aa);
        this.$emit("Administrative", this.area);
      });
      // console.log(this.area);
    },
    getCinemaAddres(params) {
      axios({
        url: `https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${
          params[0]
        },${
          params[1]
        }&coordsys=gps&output=JSON&key=55b14f37d88ac29d9bca2205bdca3cb8`
      }).then(res => {
        // console.log(res.data.locations);
        let arr = res.data.locations.split(",");
        // this.addres2 = arr
        // return arr;
      });
    },
    compare(p) {
      //这是比较函数
      return function(m, n) {};
      var a = m[p];
      var b = n[p];
      return a - b; //升序
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