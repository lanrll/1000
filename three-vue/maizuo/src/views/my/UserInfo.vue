<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell title="头像" is-link size="large">
        <van-image round width="1rem" height="1rem" :src="userInfo.headIcon" />
      </van-cell>
      <van-cell title="昵称" is-link  :value="userInfo.nickName" />
      <van-cell title="性别" is-link :value="未设置" />
      <van-cell title="出生日期" is-link value="未设置" />
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/user.js";
export default {
  data() {
    return {
      userInfo: ""
    };
  },
  created() {
    getUserInfo().then(res => {
      this.userInfo = res.data;
    });
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  }
};
</script>