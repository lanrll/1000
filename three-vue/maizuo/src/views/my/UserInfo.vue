<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" />
    <div>
      <van-cell title="头像" is-link size="large">
        <van-image round width="1rem" height="1rem" :src="userInfo.headIcon" />
      </van-cell>
      <van-cell title="昵称" is-link :value="userInfo.nickName" />
      <van-cell title="性别" is-link value="未设置" @click="show=true" />
      <van-action-sheet
        v-model="show"
        :actions="actions"
        description="更改性别"
        cancel-text="取消"
       
        @cancel="onCancel"
        close-on-click-action
      />
      <van-cell title="出生日期" is-link value="未设置" @click="showDate=true" />
      <van-action-sheet v-model="showDate">
        <van-datetime-picker v-model="currentDate" type="date" @cancel="showDate=false" />
      </van-action-sheet>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/user.js";
export default {
  data() {
    return {
      userInfo: "",
      show: false,
      showDate: false,
      currentDate: new Date(),
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        }
      ]
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
    },
    onSelect() {
      this.show = true;
    },
    onCancel() {
      // Toast("cancel");
    }
  }
};
</script>
<style lang="scss">
  .van-action-sheet__content{
    width: 100%;
  }
</style>