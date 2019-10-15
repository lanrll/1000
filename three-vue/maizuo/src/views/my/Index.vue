<template>
  <div class="contener">
    <header class="header">
      <div>
          <img src="@/assets/logo.png" alt="">
      </div>
      <div>
          立即登录
      </div>
    </header>
    <div class="tab">
        <div>
            <span class="fa fa-file-text-o"></span>
            <p>电影订单</p>
        </div>
        <div>
            <span class="fa fa-file-text-o"></span>
            <p>商品订单</p>
        </div>
    </div>
    <div class="list">
        <van-cell title="卖座卷" is-link  icon="coupon-o"/>
        <van-cell title="组合红包" is-link  icon="bill-o"/>
        <van-cell title="余额" is-link  value="￥0" icon="balance-o"/>
        <van-cell title="设置" is-link  icon="setting-o"/>
        <van-cell title="设置" is-link  icon="setting-o" v-show="false"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  }
};
</script>
<style lang="scss">
.contener{
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;
}
    .header{
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        flex-flow: wrap;
        justify-content: space-around;
        font-size: .4rem;
        background-color: #FFA607;
        div{
            width: 2rem;
            img{
                width: 100%;
                border-radius: 50%; 
            }
            &:nth-child(2){
                margin-right: 2rem;
                color: #fff;
            }
        }
    }
    .tab{
        width: 100%;
        height: 1.6rem;
        font-size: .3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        margin-bottom: .2rem;
        div{
            text-align: center;
            span{
                font-size: .5rem;
                margin-bottom: .2rem;
            }
        }
    }
    .list{
        padding-bottom: 5rem;
    }
</style>