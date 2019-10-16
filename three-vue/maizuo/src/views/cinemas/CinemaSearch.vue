<template>
  <div>
    <div>
      <van-sticky>
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action @cancel="onCancel" />
      </van-sticky>
    </div>
    <cinema-list :data="value3" :keyw="value"></cinema-list>
  </div>
</template>
<script>
import CinemaList from "./components/List";
export default {
  data() {
    return {
        value: '',
        value3: '全城'
    };
  },
  methods: {
      onCancel(){
          history.go(-1)
      }
  },
  components: {
    CinemaList
  }
};
</script>