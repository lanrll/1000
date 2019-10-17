<template>
  <div>
    <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  }
};
</script>