<template>
  <div class="film-list-content">
    <van-list v-model="isLoading" :finished="finished"  @load="loadMore()" finished-text="没有更多了">
    <ul class="film-list-group">
      <!-- 一个列表项start -->
      <li class="film-list-item" v-for="item in dataList" :key="item.filmId">
        <router-link :to="{name:'filmDetail',params:{id:item.filmId}}">
          <div class="film-list-item-pic padding">
            <img :src="item.poster" />
          </div>
          <div class="film-list-item-desc">
            <h3 class="item-desc-name">
              <span class="name">{{item.name}}</span>
              <span class="is-3d">{{item.filmType.name}}</span>
            </h3>
            <p class="item-desc-grade info-col">
              <span>观众评分</span>
              <span class="grade">{{item.grade ? item.grade: '无'}}</span>
            </p>
            <p class="item-desc-actors info-col">
              <label>主演：</label>
              <span>{{item.actors | operateActors}}</span>
            </p>
            <p class="item-desc-times info-col">
              <label>{{item.nation}}</label> |
              <span>{{item.runtime}}分钟</span>
            </p>
          </div>
          <div class="film-list-item-action padding">
            <router-link :to="{name:'FilmCinemas',params:{id:item.filmId}}">
            <span href class="buy">购买</span>
            </router-link>
          </div>
        </router-link>
      </li>
    </ul>
    </van-list>
  </div>
</template>
<script>
// import request from '@/utils/request'
import { getFilmList } from '@/api/film'
export default {
    data(){
      return {
        dataList:[],
        isLoading: false,
        finished: false,
        pageInfo:{
          pageSize:10,
          pageNum:0,
          total:-1
        }
      }
    },
    created(){
      // this.getData()
    },
    methods:{
      getData(){
        this.pageInfo.pageNum++
        let query = {type:1,...this.pageInfo}
        delete query.total
        getFilmList(query).then(res=>{
          if(res.status == 0){
            this.dataList.push(...res.data.films)
            this.pageInfo.total = res.data.total
          }
          this.isLoading = false
        })
      },
      loadMore(){
        if(this.pageInfo.total == this.dataList.length){
          this.isLoading = false;
          this.finished = true;
          return
        }
        this.getData();
      }
    }
}
</script>
<style scoped lang="scss">
/* 电影列表项 */
.film-list-content{
    /* margin-top:1.86rem; */
    background: #fff;
    padding-bottom: .98rem;
}
.film-list-group{
    padding:0 0.3rem;
}
.film-list-item{
    height: 1.88rem; 
    padding:0.3rem 0;
    position: relative;
}
.film-list-item:after{
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
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
.film-list-item>a{
    display: flex;
    width:100%;
    align-items: center;
}
.film-list-item-pic{
    width:1.32rem;
    height: 1.88rem;
    flex:none;
    overflow:hidden;
}
.padding{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.film-list-item-pic>img{
    width: 100%;
}
.film-list-item-desc{
    flex:1;
    padding:0 .2rem;
    max-width: calc(100% - 2.32rem);
    box-sizing: border-box;
}
.item-desc-name{
    font-size:.32rem;
}
.item-desc-name .name{
    color: #191a1b;
    margin-right: 0.1rem;
}
.item-desc-name .is-3d{
    font-size: .18rem;
    color: #fff;
    background-color: #d2d6dc;
    height: .28rem;
    line-height: .28rem;
    padding: 0 2px;
    border-radius: 2px;
}
.film-list-item-desc .info-col{
    display: block;
    width: 100%;
    padding: 0.02rem 0;
    font-size:.26rem;
    color: #797d82;
    margin-top:.12rem;
    overflow-x: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-desc-grade .grade{
    color: #ffb232;
    font-size:.28rem;
}
.film-list-item-action{
    width:1rem;
    flex:none;
    height: 1.1rem;
    font-size:0;
}
.film-list-item-action .buy{
    display: block;
    box-sizing: border-box;
    line-height: .5rem;
    height: .5rem;
    width: 1rem;
    color: #ff5f16;
    font-size: .26rem;
    text-align: center;
    position: relative;
    border: 1px solid #ff5f16;
    border-radius: 2px;
}
</style>