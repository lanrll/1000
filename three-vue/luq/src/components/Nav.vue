<template>
  <div class="navDiv">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" />
      </router-link>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/terminal" >终端设置</el-menu-item>
      <el-menu-item index="/wife" >WiFe设置</el-menu-item>
      <el-menu-item index="/storage" >储存管理</el-menu-item>
      <el-menu-item index="/advanced" >高级设置</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
      activeIndex2: "/"
    };
  },
  mounted () {
    console.log(this.activeIndex, this.activeIndex2);
    this. handleSelect()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.activeIndex = key
      // this.activeIndex2 = [key]
      // console.log(this.activeIndex, this.activeIndex2);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  float: left;
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.go {
  float: left;
  width: 100%;
  height: 100%;
}
.nav {
  margin: 0 auto;
}
</style>
