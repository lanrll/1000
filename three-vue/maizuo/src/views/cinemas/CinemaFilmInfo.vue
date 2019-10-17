<template>
  <div>
    <van-sticky :offset-top="40">
      <router-link :to="`/film/${$route.params.fid}`" class="films">
        <p>
          <i>{{filmInfo.name}}</i>
          <span>{{filmInfo.grade}} 分</span>
        </p>
        <p>
          <span>{{filmInfo.category}} |</span>
          <span>{{filmInfo.runtime}}分钟 |</span>
          <span>{{filmInfo.director}} |</span>
          <span>{{filmInfo.actors | operateActors}}</span>
        </p>
      </router-link>
    <van-tabs v-model="active">
      <van-tab
        v-for="(item) in showDate"
        :key="item"
        :to="`/cinema/${$route.params.cid}/film/${$route.params.fid}/${item}`"
      >
        <div slot="title">
            {{item | formatDate}}
            <!-- <van-icon name="more-o" />选项 -->
        </div>
        <!-- 内容 {{ item }} -->
        <!-- <ul class="list">
          <li v-for="item in schedules" :key="item.scheduleId">
            <div>
              <p>{{item.showAt | filmsTime}}</p>
              <p>{{item.endAt | filmsTime}}散场</p>
            </div>
            <div>
              <p>{{item.filmLanguage}} {{item.imagery}}</p>
              <p>{{item.hallName}}</p>
            </div>
            <div>￥{{item.salePrice/100}}</div>
            <div>购票</div>
          </li>
        </ul>-->
      </van-tab>
      <!-- <van-tab @title="item" :name="item" v-for="(item) in filmInfo.showDate" :key="item">{{item}}</van-tab> -->
      <!-- <van-tab :title="item" v-for="(item) in filmInfo.showDate" :key="item">{{item}}</van-tab> -->
      <!-- <template v-for="(item,index) in filmInfo.showDate">
        <router-link
          :to="`/cinema/${$route.params.cid}/film/${$route.params.fid}/${item}`"
          :key="item"
        >{{item}}</router-link>
        <br :key="item+'-'+index" />
      </template>-->
    </van-tabs>
     </van-sticky>
    <!-- <ul>
      <li v-for="item in schedules" :key="item.scheduleId">{{item.hallName}}</li>
    </ul>-->
    <ul class="list">
      <li v-for="item in schedules" :key="item.scheduleId">
        <div>
          <p>{{item.showAt | filmsTime}}</p>
          <p>{{item.endAt | filmsTime}}散场</p>
        </div>
        <div>
          <p>{{item.filmLanguage}} {{item.imagery}}</p>
          <p>{{item.hallName}}</p>
        </div>
        <div>￥{{item.salePrice/100}}</div>
        <div>购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCinemaFilmSchedule } from "@/api/cinema";
export default {
  props: ["filmInfo"],
  data() {
    return {
      schedules: [],
      active: 0,
      container: null,
      showDate: this.filmInfo.showDate.sort()
    };
  },
  mounted() {
    this.container = this.$refs.container;
    console.log(this.filmInfo)
  },
  watch: {
    $route: {
      handler(val) {
        this.getData();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getData() {
      let id1 = this.$route.params.cid,
        id2 = this.$route.params.fid,
        dat = this.$route.params.date;
      getCinemaFilmSchedule({ cid: id1, fid: id2, date: dat }).then(res => {
        this.schedules = res.data.schedules;
        // console.log(res.data.schedules);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.films {
  display: block;
  width: 100%;
  height: 1.6rem;
  padding: 0.3rem 0;
  font-size: 0.28rem;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
  p {
    &:nth-child(1) {
      display: block;
      width: 100%;
      font-size: 0.35rem;
      margin: 0.1rem 0;
      color: #191a1b;
      span {
        color: #ffb232;
        margin-left: 0.2rem;
      }
    }
    &:nth-child(2) {
      display: block;
      width: 90%;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0.2rem auto;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #797d82;
      padding: 0 0.1rem;
    }
  }
}
.list {
  font-size: 0.3rem;
  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 1.48rem;
    padding: 0.3rem;
    box-sizing: border-box;
    align-items: center;
    div {
      p {
        text-align: left;
        &:nth-child(2) {
          font-size: 0.24rem;
          color: #797d82;
          margin-top: 0.1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      &:nth-child(2) {
        width: 2rem;
      }
      &:nth-child(3) {
        color: #ff5f16;
        font-size: 0.3rem;
      }
      &:nth-child(4) {
        height: 0.5rem;
        line-height: 0.5rem;
        width: 1rem;
        border-radius: 0.05rem;
        text-align: center;
        font-size: 0.24rem;
        color: #ff5f16;
        border: 0.02rem solid #ff5f16;
      }
    }
  }
}
</style>