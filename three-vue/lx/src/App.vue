<template>
  <div id="app">
    <ul id="nav">
      <li>
      <router-link to="/">Home</router-link>
      </li>
      <li>
      <router-link to="/list">查看任务</router-link>
      </li>
    </ul>
    <main>
    <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  height: 100%;
}
main{
  float:left;
  width: 90%;
  height: 100%;
}
#nav {
  float: left;
  width: 10%;
  height: 100%;
  background-color: #ccc;
  padding: 30px 0;
  li{
    width: 100%;
  }
  a {
    float: left;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
      background-color: #f40;
    }
  }
}
</style>
