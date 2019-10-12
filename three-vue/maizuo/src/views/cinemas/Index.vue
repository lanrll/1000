<template>
  <div>
    <van-nav-bar title="影院" left-text="成都" @click-left="onClickLeft" @click-right="onClickRight">
      <span slot="left">成都</span>
      <van-icon name="arrow-down" slot="left" />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item title="全城" ref="item">
          <!-- <van-tag v-for="(item,i) in qu" :key="i" class="qu">{{item}}</van-tag> -->
          <van-button color="rgba(210,214,220,.5)" v-for="(item,i) in qu" :key="i" class="qu">{{item}}</van-button>
      </van-dropdown-item>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <cinema-list></cinema-list>
  </div>
</template>
<script>
import CinemaList from "./components/List";
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "APP订票", value: 0 },
        { text: "前台兑换", value: 1 }
      ],
      option2: [
        { text: "最近去过", value: 0 },
        { text: "离我最近", value: 1 }
      ],
      qu:['阿斯顿','千峰','准时达','亲爱二狗','前二个','掐如果','青蛙','且无人通过','去玩儿','很舒服','阿斯蒂芬','阿斯顿法国','儿童椅',]
    };
  },
  methods: {
    onClickLeft() {
      console.log(1);
    },
    onClickRight() {
      console.log(2);
    }
  },
  components: {
    CinemaList
  }
};
</script>
<style lang="scss">
    qu{
        margin: 0 .1rem;
    }
</style>