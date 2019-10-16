<template>
  <main>
    <van-sticky>
      <header>
        <span class="fa fa-close" @click="close"></span>
        <i>当前城市-{{$store.state.cityName}}</i>
      </header>
      <div>
        <van-search background="#f4f4f4" v-model="kw" placeholder="请输入搜索关键词"  />
      </div>
    </van-sticky>
    <div class="city">
      <p>gps定位你所在的城市</p>
      <div>
        <b @click="selectCity(gpsCityId,gpsCityName)">{{gpsCityName}}</b>
      </div>
    </div>
    <div class="city">
      <p>热门城市</p>
      <div>
        <b v-for="item in host" :key="item.name" @click="selectCity(item.cityId,item.name)">{{item.name}}</b>
      </div>
    </div>
    <div v-if="!kw">
      <van-index-bar :index-list="indexes" :sticky-offset-top="95">
        <template v-for="(char) in indexes">
          <van-index-anchor :index="char" :key="char" class="shouzimu"/>
          <van-cell
            @click="selectCity(city.cityId,city.name)"
            :title="city.name"
            v-for="(city) in cityData[char]"
            :key="city.cityId"
          />
        </template>
      </van-index-bar>
    </div>
    <div v-else>
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <van-cell v-for="(item,index) in citys" :key="index" @click="selectCity(item.cityId,item.name)">{{item.name}}</van-cell>
      <van-cell >{{citys.length ? '' : '未找到城市！！！'}}</van-cell>
    </div>
  </main>
</template>

<script>
import location1 from "@/utils/locations";
import { setCityId, setCityName } from "@/utils/local-data";
import { getCityList } from "@/api/city";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      kw: "",
      cityList: [],
      cityData: {},
      host: [],
      search: [],
      gpsCityName: "",
      gpsCityId: "",
      indexes: []
    };
  },
  created() {
    this.getLocation();
  },
  computed: {
    citys() {
      return this.cityList.filter(item => {
        return item.name.includes(this.kw) || item.pinyin.includes(this.kw);
      });
    }
    // cityData() {
    //   let res = {};
    //   this.cityList.forEach(el => {
    //     let key = el.pinyin.charAt(0).toUpperCase();
    //     if(el.isHot == 1 ){
    //         this.host.push(el)
    //     }
    //     if (!res[key]) {
    //       res[key] = [];
    //       this.indexes.push(key);
    //     }
    //     res[key].push(el);
    //   });
    //   this.indexes.sort();
    //   return res;
    // }
  },
  methods: {
    ...mapMutations(["setCityId", "setCityName"]),
    /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location1.initMap("container", cityName => {
        //   localStorage.setItem('local',cityName) ;
        this.gpsCityName = cityName;
        this.gpsCity = cityName;
        this.getCityData();
        // this.getCityIdByName();
        // this.setCity(this.gpsCityId, this.gpsCityName);
        // console.log("location.js中拿到的", cityName);
        // this.$emit("changeCity", cityName); // 向父组件传递当前城市
      }); //定位
    },
    //得到城市数据
    getCityData() {
      let _this = this;
      getCityList().then(res => {
        if (res.status == 0) {
          this.cityList = res.data.cities;
          console.log(res.data.cities);
          this.getCityIdByName();
        //   this.setCity(this.gpsCityId,this.gpsCityName)
          // this.setCity(this.gpsCityId, this.gpsCityName);
          //   _this.cityData();
          this.ArrangementCityData();
        }
      });
    },
    //城市数据排序
    ArrangementCityData() {
      // let res = {};
      this.cityList.forEach(el => {
        let key = el.pinyin.charAt(0).toUpperCase();
        if (el.isHot == 1) {
          this.host.push(el);
        }
        if (!this.cityData[key]) {
          this.cityData[key] = [];
          this.indexes.push(key);
        }
        this.cityData[key].push(el);
      });
      this.indexes.sort();
      //   this.cityData = let
    },
    //通过城市名获取城市id
    getCityIdByName() {
      for (let i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].name == this.gpsCityName) {
          this.gpsCityId = this.cityList[i].cityId;
          break;
        }
      }
    },
    //设值城市
    setCity(id, name) {
        setCityId(id);
        setCityName(name);
      this.setCityId(id);
      this.setCityName(name);
    },
    selectCity(id, name) {
        console.log(this.host)
        console.log(id,name)
      this.setCity(id, name);
      history.back()
      // this.$router.push("/films");
    },
    close(){
      this.setCity(this.gpsCityId, this.gpsCityName);
      history.back()
      // this.$router.push("/films");
    }
  }
};
</script>
<style lang="scss">
main {
  font-size: 0.3rem;
  header {
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    position: relative;
    span {
      padding: 0.2rem;
      position: absolute;
    }
    i {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
  .city {
    padding: 0.3rem;
    p {
      font-size: 0.26rem;
      color: #797d82;
      margin-bottom: 0.2rem;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      b {
        display: block;
        background-color: #f4f4f4;
        width: 2rem;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        //   box-sizing: border-box;
        margin: 0 0.15rem;
        color: #191a1b;
        margin-bottom: 0.3rem;
      }
    }
  }
  .van-search__content{
    background-color: #fff;
  }
  .shouzimu{
    background-color: #f4f4f4;
  }
  
}
</style>