<template>
  <div class="about">
    <h1>login...</h1>
    <p>
      用户名：
      <input type="text" v-model="username" />
    </p>
    <p>
      密码：
      <input type="password" name id v-model="password" />
    </p>
    <p>
      <input type="button" value="登录" @click="login()" />
      <input type="button" value="退出" @click="quit()" />
    </p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(['username','password'])
    
    username: {
      get() {
        return this.$store.state.username;
      },
      set(value) {
        this.$store.commit("updateUsername", value);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(value) {
        this.$store.commit("updatePassword", value);
      }
    }
  },
  methods: {
    updateUsername(e) {
      this.$store.commit("updateUsername", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("updatePassword", e.target.value);
    },
    ...mapActions(["userLogin"]),
    login() {
      this.userLogin();
    },
    quit(){
      if(confirm('sure?')){
        localStorage.removeItem('token')
      }
    }
  }
};
</script>