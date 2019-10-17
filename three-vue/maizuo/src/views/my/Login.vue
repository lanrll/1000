<template>
  <div>
    <!-- <img src="~@/assets/imgs/back.png" class="go-back" @click="goBack()" v-show="isshow" />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>-->
    <div class="img">
      <img src="@/assets/logo.png" />
    </div>
    <van-cell-group>
      <van-field v-model="phone" center clearable placeholder="请输入电话号码">
        <van-button slot="button" type="primary" size="small" @click="getSmsCode()" :disabled ="phone.length==0">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="smsCode" center clearable placeholder="请输入验证码"></van-field>
    </van-cell-group>
    <van-button slot="button" type="primary" :disabled="is" size="large" @click="userLogin">登录</van-button>
  </div>
</template>
<script>
import { getCode ,Login} from "@/api/user.js";
import { setToken,setUserinfo} from "@/utils/local-data.js";
export default {
  data() {
    return {
      phone: "",
      smsCode: "",
    };
  },
  computed: {
    is(){
      let a = true
      if(this.phone.length > 0){
        if(this.smsCode.length > 0){
          a = false
        }
      }
      return a
    }
  },
  methods: {
    getSmsCode() {
      getCode(this.phone).then(res => {
        console.log(res);
      });
    },
    userLogin(){
      Login(this.phone,this.smsCode).then(res => {
        this.$store.commit('setUserinfo',res.data)
        setUserinfo(res.data)
        setToken(res.data.token)
        if(res.status ==0){
          this.$router.push('/my')
        }
        // console.log(res)
      })
    }
  }
};
</script>
<style lang="scss">
.img {
  width: 50%;
  margin: 2rem auto;
  img {
    border-radius: 50%;
    width: 100%;
  }
}
</style>