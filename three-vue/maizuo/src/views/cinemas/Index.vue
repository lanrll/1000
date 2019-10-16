<template>
  <div>
    <div class="cinema-top">
      <van-sticky>
        <van-nav-bar title="影院" @click-left="onClickLeft" @click-right="onClickRight">
          <!-- <router-link to="/city"> -->
          <span slot="left">{{$store.state.cityName}}</span>
          <!-- </router-link> -->
          <van-icon name="arrow-down" slot="left" />
          <van-icon name="search" slot="right" />
        </van-nav-bar>
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
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </van-sticky>
      <cinema-list @Administrative="area($event)" :data="value3" :keyw="value"></cinema-list>
    </div>
  </div>
</template>
<script>
import CinemaList from "./components/List";
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: 0,
      value3: "全城",
      option1: [{ text: "APP订票", value: 0 }, { text: "前台兑换", value: 1 }],
      option2: [{ text: "最近去过", value: 0 }, { text: "离我最近", value: 1 }],
      qu: ["全城"]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/city");
    },
    onClickRight() {
      // this.value3 = "全城";
      console.log(1)
      this.$router.push("/cinemas/search")
    },
    area(val) {
      val.forEach(el => {
        this.qu.push(el);
      });
    },
    changeArea(val) {
      this.value3 = val;
      this.$refs.item.toggle();
    },
  },
  components: {
    CinemaList
  }
};
</script>
<style lang="scss">
.cinema-top {
  .van-nav-bar .van-icon {
    color: #797d82;
  }
}
.van-popup {
  font-size: 0.26rem;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  b {
    display: inline-block;
    width: 1.5rem;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #797d82;
    border: 0.02rem solid #797d82;
    margin: 0.2rem 0.1rem 0.1rem 0.2rem;
  }
  .ac {
    color: #ff5f16;
    border: 0.02rem solid #ff5f16;
  }
}
</style>