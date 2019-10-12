<template>
  <div class="container">
    <div class="film-detail">
      <!-- 顶部固定标题部分start -->
      <header class="header-title">
        <img src="~@/assets/imgs/back.png" class="go-back" @click="goBack()" />
        <!-- <span class="header-title-center">昆虫总动员2：来自远方的后援军</span> -->
      </header>
      <!-- 电影详情的大图部分 -->
      <div class="film-poster">
        <img :src="filmDetail.poster" />
      </div>
      <!-- 电影基本说明部分 -->
      <div class="film-base-desc">
        <p>
          <span>{{filmDetail.name}}</span>
          <span>{{filmTypeName}}</span>
          <span>
            <b>{{filmDetail.grade}}</b>分
          </span>
        </p>
        <p>{{filmDetail.category}}</p>
        <p>{{filmDetail.premiereAt | formatTime}}</p>
        <p>{{filmDetail.nation}} | {{filmDetail.runtime}}分钟</p>
        <div :class="[showdesc ? 'synopsis':'moren']">{{filmDetail.synopsis}}</div>
        <div class="zhankai">
          <span
            class="fa"
            :class="[showdesc ? 'fa-angle-up':'fa-angle-down']"
            @click="showdesc = !showdesc"
          ></span>
        </div>
      </div>
      <!-- 电影演员相片 -->
      <div class="film-actors-desc">
        <h3>演员人员</h3>
        <actors-banner :data="filmDetail.actors" v-if="actorsLength>0"></actors-banner>
      </div>
      <!-- 电影剧照介绍 -->
      <div class="film-photo-desc">
        <div class="photos">
          <b>剧照部分</b>
          <span>全部{{photosLength}} ></span>
        </div>
        <photos-banner :data="filmDetail.photos"  v-if="photosLength>0"></photos-banner>
      </div>
    </div>
    <div class="nav-bar">
      <a href class="go-shedule">选座购票</a>
    </div>
  </div>
</template>
<script>
import ActorsBanner from "./components/ActorsBanner";
import PhotosBanner from "./components/PhotosBanner";
import { getFilmDetail } from "@/api/film";
export default {
  data() {
    return {
      filmDetail: {},
      filmTypeName: null,
      photosLength: null,
      actorsLength: null,
      showdesc: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getFilmDetail(this.$route.params).then(res => {
        this.filmDetail = res.data.film;
        this.filmTypeName = this.filmDetail.filmType.name;
        this.photosLength = this.filmDetail.photos.length;
        this.actorsLength = this.filmDetail.actors.length;
      });
    },
    goBack() {
      history.go(-1);
    }
  },
  components: {
    ActorsBanner,
    PhotosBanner
  }
};
</script>
<style lang="scss">
.container {
  color: #2c3e50;
  background-color: #f4f4f4;
  font-size: 0.24rem;
}
/* 顶部标题固定部分 */
.header-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  z-index: 9;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  text-align: center;
  font-size: 0.34rem;
  transition: all 0.3s;
}
.header-title .go-back {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.film-detail-title {
  transition: all 0.3s ease;
  background-color: #fff;
  color: #191a1b;
}
.film-detail-title:after {
  display: block;
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
/* 电影详情中的大图 */
.film-poster {
  height: 4.2rem;
  background-color: blue;
  width: 100%;
}
.film-poster img {
  width: 100%;
  height: 100%;
}
// /电影介绍/
.film-base-desc {
  padding: 0.3rem;
  padding-top: 0.24rem;
  background-color: #fff;
  p {
    font-size: 0.26rem;
    color: #797d82;
    margin-top: 0.1rem;
    &:nth-child(1) {
      span {
        &:nth-child(1) {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        &:nth-child(2) {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
        &:nth-child(3) {
          text-align: right;
          color: #ffb232;
          float: right;
          b {
            font-size: 18px;
            font-style: italic;
          }
        }
      }
    }
  }
  div {
    transition: all 0.5s;
  }
  .moren {
    font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
    height: 0.76rem !important;
    overflow: hidden;
    margin-top: 0.24rem;
    font-size: 0.26rem;
    color: #797d82;
  }
  .synopsis {
    font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
    margin-top: 0.24rem;
    font-size: 0.26rem;
    color: #797d82;
  }
  .zhankai {
    margin-top: 0.1rem;
    text-align: center;
    display: block;
    height: auto;
    width: 0.4rem;
    margin: auto;
    line-height: normal;
    span {
      font-size: 0.3rem;
    }
  }
}
// 演员
.film-actors-desc {
  margin-top: 10px;
  background-color: #fff;
  h3 {
    // width: 100%;
    padding: 0.3rem;
    font-size: 0.32rem;
    text-align: left;
    color: #191a1b;
    display: inline-block;
    height: 0.45rem;
    line-height: 0.44rem;
  }
}
//剧照
.film-photo-desc {
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
  background-color: #fff;
  .photos {
    height: 0.6rem;
    padding: 0.3rem;
    b {
      font-size: 0.32rem;
      text-align: left;
      color: #191a1b;
      display: inline-block;
      height: 0.45rem;
      line-height: 0.44rem;
    }
    span {
      font-size: 0.26rem;
      color: #797d82;
      float: right;
      // display: inline-block;
      height: 0.45rem;
      line-height: 0.44rem;
    }
  }
  
}
/* 选座购票固定区域 */
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
}
.go-shedule {
  display: block;
  height: 0.98rem;
  line-height: 0.98rem;
  text-align: center;
  width: 100%;
  background-color: #ff5f16;
  color: #fff;
  font-size: 0.32rem;
}
</style>