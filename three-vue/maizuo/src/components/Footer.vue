<template>
  <!-- <van-tabbar v-model="active" class="nav-bar" route>
    <van-tabbar-item name="film" icon=" fa fa-film" to="/">电影</van-tabbar-item>
    <van-tabbar-item name="cinema" icon=" fa fa-home" to="/cinemas">影院</van-tabbar-item>
    <van-tabbar-item name="news" icon=" fa fa-leanpub" to="/new">资讯</van-tabbar-item>
    <van-tabbar-item name="my" icon=" fa fa-user" to="/my">我的</van-tabbar-item>
  </van-tabbar>-->
  <div v-show="isok">
    <ul class="nav-bar">
      <li>
        <router-link to="/" :class="active===0 ? 'active': ''">
          <i class="fa fa-film"></i>
          <span>电影</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cinemas" :class="active===1 ? 'active': ''">
          <i class="fa fa-home"></i>
          <span>影院</span>
        </router-link>
      </li>
      <li>
        <router-link to="/new" :class="active===2 ? 'active': ''">
          <i class="fa fa-leanpub"></i>
          <span>资讯</span>
        </router-link>
      </li>
      <li>
        <router-link to="/my" :class="active===3 ? 'active': ''">
          <i class="fa fa-user"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isok: true,
      active: 0
    };
  },
  watch: {
    $route: {
      handler(val) {
        if(val.path == '/cinemas'){
          this.active = 1
        }else if(val.path == '/new'){
          this.active = 2
        }else if(val.path == '/my'){
          this.active = 3
        }else{
          this.active = 0
        }
        if (val.meta.footerNav !== 1) {
          this.isok = true;
          return;
        }
        this.isok = false;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="scss">
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.2rem;
  background-color: #fff;
  .active {
    color: #f40;
  }
}
.nav-bar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-bar li {
  flex: 1;
  text-align: center;
  height: 0.98rem;
}
.nav-bar a {
  color: #797d82;
  display: block;
  height: 0.98rem;
  line-height: 0.56rem;
  width: 100%;
  position: relative;
  padding-top: 0.08rem;
  box-sizing: border-box;
}
.nav-bar i {
  font-size: 0.4rem;
  width: 0.42rem;
  height: 0.42rem;
}
.nav-bar span {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>