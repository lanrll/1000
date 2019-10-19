<template>
  <div class="contener">
    <header class="header">
      <div>
        <!-- <img :src="userInfo.headIcon ? userInfo.headIcon : ' @/assets/logo.png'"  /> -->
        <van-image round width="2rem" height="2rem" :src="userInfo.headIcon ? userInfo.headIcon : ' @/assets/logo.png'"/>
      </div>
      <div>
        <router-link to="/login" v-if="!userInfo.nickName">立即登录</router-link>
        <router-link to="/user/info" v-if="userInfo.nickName">{{userInfo.nickName}}</router-link>
      </div>
    </header>
    <div class="tab">
      <div>
        <router-link :to="alreadyLogin ? '/user/order':''">
          <span class="fa fa-file-text-o"></span>
          <p>电影订单</p>
        </router-link>
      </div>
      <div>
        <router-link :to="alreadyLogin ? '/user/commodity':''">
          <span class="fa fa-file-text-o"></span>
          <p>商品订单</p>
        </router-link>
      </div>
    </div>
    <div class="list">
      <van-cell title="卖座卷" is-link icon="coupon-o" :to="alreadyLogin ? '/user/volume':''" />
      <van-cell title="组合红包" is-link icon="bill-o" :to="alreadyLogin ? '/user/red':''" />
      <van-cell title="余额" is-link value="￥0" icon="balance-o" :to="alreadyLogin ? '/user/balance':''" />
      <van-cell title="设置" is-link icon="setting-o" :to="alreadyLogin ? '/user/set':''" />
      <van-cell title="设置" is-link icon="setting-o" v-show="false" />
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/user.js";
import { getUserData, setUserData } from "@/utils/local-data.js";
export default {
  data() {
    return {
      active: 0,
      userInfo: "",
      alreadyLogin: false
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      getUserInfo().then(res => {
        // console.log(res);
        if (res.status == 0) {
          this.userInfo = res.data;
          // this.$toast(`欢迎！${res.data.nickName}`);
          this.alreadyLogin = true;
        }else{
          this.$toast(`${res.msg}`);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.contener {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}
.header {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: space-around;
  font-size: 0.4rem;
  background-color: #ffa607;
  div {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      border-radius: 50%;
    }
    &:nth-child(2) {
      margin-right: 2rem;
      line-height: 2rem;
      a {
        color: #fff;
      }
    }
  }
}
.tab {
  width: 100%;
  height: 1.6rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  margin-bottom: 0.2rem;
  div {
    a {
      display: block;
      text-align: center;
      color: #000;
      span {
        font-size: 0.5rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
.list {
  padding-bottom: 5rem;
}
</style>