<template>
    <div class="container">
    <div class="film-detail">
         <!-- 顶部固定标题部分start -->
         <header class="header-title">
            <img src="~@/assets/imgs/back.png" class="go-back" @click="goBack()"/>
            <span class="header-title-center">昆虫总动员2：来自远方的后援军</span>
        </header>
        <!-- 电影详情的大图部分 -->
        <div class="film-poster">
            <img :src="filmDetail.poster" />
        </div>
        <!-- 电影基本说明部分 -->
        <div class="film-base-desc">
            <p>{{filmDetail.name}} <span>评分{{filmDetail.grade}}</span></p>
            <p>{{filmDetail.category}}</p>
            <p>{{filmDetail.premiereAt}}</p>
            <p>{{filmDetail.nation}} | {{filmDetail.runtime}}分钟</p>
            <p>{{filmDetail.synopsis}}</p>
        </div>
        <!-- 电影演员相片 -->
        <div class="film-actors-desc">
            <h3>演员人员</h3>
            <ul>
                <li v-for="(item, index) in filmDetail.actors" :key="index">
                    <img :src="item.avatarAddress" >
                    <p>{{item.name}}</p>
                    <p>{{item.role}}</p>
                </li>
            </ul>
        </div>
        <!-- 电影剧照介绍 -->
        <div class="film-photo-desc">
            <h3>剧照部分</h3>
                <ul>
                <li v-for="(item, index) in filmDetail.photos" :key="index">
                    <img :src="item" >
                </li>
            </ul>
            </div>
    </div>
    <div class="nav-bar">
        <a href="" class="go-shedule">选座购票</a>
    </div>
</div> 
</template>
<script>
import { getFilmDetail } from '@/api/film'
export default {
    data() {
        return {
            filmDetail:{}
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            getFilmDetail(this.$route.params).then(res => {
                this.filmDetail = res.data.film
                console.log(this.filmDetail)
            })
        },
        goBack(){
            history.go(-1)
        }
    },
}
</script>
<style lang="scss">
    .film-detail{
    height: 20rem;
    // background: red;
}
/* 顶部标题固定部分 */
.header-title{
    position: fixed;
    top:0;
    width:100%;
    height: 0.88rem;
    line-height: 0.88rem;
    z-index: 9000;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    text-align: center;
    font-size:.34rem;
    transition: all .3s
}
.header-title .go-back{
    width:.6rem;
    height: .6rem;
    position: absolute;
    left:.1rem;
    top:.1rem;
}
.film-detail-title{
    transition: all .3s ease;
    background-color: #fff;
    color: #191a1b;
}
.film-detail-title:after{
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
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
/* 电影详情中的大图 */
.film-poster{
    height: 4.2rem;
    background-color: blue;
    width:100%;
}
.film-poster img{
    width:100%;
    height: 100%;
}
// /电影介绍/ 
.film-base-desc{
    p{
        font-size: .3rem;
    }
}
// 演员
.film-actors-desc{
    h3{
        font-size: .6rem;
    }
    ul{
        height: 2.8rem;
        li{
            float: left;
            width: 1.7rem;
            height: 2.62rem;
            margin-right: .1px;
            img{
                width: 100%;
            }
            p{
                margin-top: .1rem;
                font-size: .2rem;
                text-align: center;
            }
        }
    }
}
//剧照

/* 选座购票固定区域 */
.nav-bar{
    height: .98rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index:100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
}
.go-shedule{
    display: block;
    height: .98rem;
    line-height: .98rem;
    text-align: center;
    width:100%;
    background-color: #ff5f16;
    color: #fff;
    font-size:.32rem;
}
</style>