<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" />
    <main>
      <div  class="ac"></div>
      <div class="ac">
        <van-cell title="账号ID" is-link :value="userInfo" />
      </div>
      <div class="ac">
        <van-cell title="登录密码" is-link value="修改" />
        <van-cell title="安全密码" is-link value="未设置" />
      </div>
      <div class="ac">
        <van-cell title="软件版本" is-link />
        <van-cell title="意见反馈" is-link />
      </div>
      <div class="ac">
        <van-cell title="清除缓存" is-link value="0.1k" />
      </div>
      <div class="ab">
        <van-button type="default" size="large" @click="show=true">退出登录</van-button>
      </div>
      <van-action-sheet v-model="show" :actions="actions" description="这是一段描述信息" cancel-text="取消" />
    </main>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/user.js";
export default {
  data() {
    return {
      userInfo: null,
      show: false,
      actions: [
        {
          name: "退出",
          color: "#ff5f16"
        }
      ]
    };
  },
  created() {
    getUserInfo().then(res => {
      this.userInfo = res.data.userId;
    });
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
main {
  background-color: #f4f4f4;
  height: 12rem;
  position: relative;
  .ac {
    margin: 0.2rem 0;
  }
  .ab{
    width: 100%;
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    span{
    color: #ff5f16;
    }
  }
}
</style>