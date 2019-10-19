<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" />
    <div>
      <van-uploader :before-read="beforeRead" :after-read="afterRead">
        <van-cell title="头像" is-link size="large">
          <van-image round width="1rem" height="1rem" :src="userInfo.headIcon" />
        </van-cell>
      </van-uploader>
      <van-cell title="昵称" is-link :value="userInfo.nickName" />

      <van-cell title="性别" is-link :value="sex" @click="show=true" />
      <van-action-sheet
        v-model="show"
        :actions="actions"
        description="更改性别"
        cancel-text="取消"
        @cancel="onCancel"
        close-on-click-action
      />
      <van-cell title="出生日期" is-link :value="userInfo.birthday" @click="showDate=true" />
      <van-action-sheet v-model="showDate">
        <van-datetime-picker v-model="currentDate" type="date" @cancel="showDate=false" />
      </van-action-sheet>
    </div>
  </div>
</template>
<script>
import { getUserInfo, getUserImg } from "@/api/user.js";
import { Uploader } from "vant";
export default {
  data() {
    return {
      userInfo: "",
      show: false,
      showDate: false,
      currentDate: new Date(),
      actions: [
        {
          name: "未设置"
        },
        {
          name: "男"
        },
        {
          name: "女"
        }
      ]
    };
  },
  computed: {
    sex() {
      let data = this.actions[this.userInfo.gender];
      return data.name;
    }
  },
  watch: {
    userInfo() {}
  },
  created() {
    getUserInfo().then(res => {
      this.userInfo = res.data;
    });
  },
  methods: {
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        this.$toast("请上传 jpg 格式图片");
        return false;
      }
      return true;
    },
    //DATO 头像上传
    afterRead(file) {
      // console.log(file);
      let img = this.dataURLtoBlob(file.content);
      // console.log(img)
      var reader = new FileReader();
      let f;
      reader.onload = function(res) {
        f = res.target.result;
        let str = `Content-Disposition: form-data; name="file";filename="${file.name}"
        Content-Type: ${file.type}
        ${f}`
        // console.log(1);
        getUserImg(str).then(res => {
          // console(2);
          console.log(res);
        });
      };
      reader.readAsBinaryString(img);
      // console.log(img);
    },
    //base64转二进制
    dataURLtoBlob(dataurl) {
      // console.log(1);
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    },
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
<style lang="scss" scoped>
.van-uploader{
  width: 100%;
  .van-uploader__input-wrapper{
    width: 100%;
     .van-cell__title{
       line-height: 1.2rem;
     }
     .van-cell__value{
      .van-image{
        margin-top: .2rem;
        margin-right: .5rem; 
      }
     }
     .van-icon {
       margin-top: .5rem;
     }
  }
}
.van-action-sheet__content {
  width: 100%;
}
</style>