<template>
  <div>
    <router-link :to="`/film/${$route.params.fid}`" class="films">
      <p>
        <span>{{filmInfo.name}}</span>
        <span>{{filmInfo.grade}} 分</span>
      </p>
      <p>
        <span>{{filmInfo.category }}</span>
        <span>{{filmInfo.director }}</span>
        <span>{{filmInfo.actors | operateActors}}</span>
      </p>
    </router-link>
    <van-tabs v-model="active">
      <van-tab
        v-for="(item) in filmInfo.showDate"
        :key="item"
        :to="`/cinema/${$route.params.cid}/film/${$route.params.fid}/${item}`"
      >
        <div slot="title">
          {{item | formatDate}}
          <!-- <van-icon name="more-o" />选项 -->
        </div>
        <!-- 内容 {{ item }} -->
        <ul class="list">
          {{item}}
          <li v-for="item in schedules" :key="item.scheduleId">
            <div>
              <p>{{item.showAt | filmsTime}}</p>
              <p>{{item.endAt | filmsTime}}</p>
            </div>
            <div>
              <p>{{item.filmLanguage}} {{item.imagery}}</p>
              <p>{{item.hallName}}</p>
            </div>
            <div>￥{{item.salePrice/100}}</div>
            <div>购票</div>
          </li>
        </ul>
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
    <!-- <ul>
      <li v-for="item in schedules" :key="item.scheduleId">{{item.hallName}}</li>
    </ul>-->
  </div>
</template>
<script>
import { getCinemaFilmSchedule } from "@/api/cinema";
export default {
  props: ["filmInfo"],
  data() {
    return {
      schedules: [],
      active: 0
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.getData();
        console.log(val.params.cid);
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
        console.log(res.data.schedules);
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
  font-size: 0.25rem;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
  p {
    &:nth-child(1) {
      display: block;
      width: 100%;
      font-size: 0.35rem;
      margin: 0.1rem 0;
    }
    &:nth-child(2) {
      display: block;
      width: 80%;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0.2rem auto;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #797d82;
    }
  }
}
.list{
    font-size: .3rem;
    li{
        width: 100%;
        display: flex;
        
    }
}
</style>