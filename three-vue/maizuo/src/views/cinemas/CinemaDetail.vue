<template>
    <div v-if="cinemaInfo">
         <header class="header-title">
            <img src="~@/assets/imgs/back.png" class="go-back" @click="goBack()"/>
            <!-- <span class="header-title-center">昆虫总动员2：来自远方的后援军</span> -->
        </header>
        <div>
            <h3>{{cinemaInfo.name}}</h3>
        </div>
        <div>
            <cinema-banner :data="cinemaFilms" v-if="cinemaFilms.length" @selectEvt="changeFilm($event)"></cinema-banner>
            <router-view :filmInfo="activeFilmInfo" v-if="activeFilmInfo"></router-view>
        </div>
    </div>
</template>
<script>
import CinemaBanner from './components/Banner'
import { getCinemaInfo, getCinemaFilms} from '@/api/cinema'
export default {
    data() {
        return {
            cid: 0,
            cinemaInfo: null,
            cinemaFilms: [],
            activeFilmInfo: null
        }
    },
    watch: {
        '$route.params.cid': {
            handler(val){
                this.cid = val;
                this.getCinemaDetail();
                this.getCinemaFilmLists();
            },
            immediate: true
        }
    },
    methods: {
        getCinemaDetail(){
            getCinemaInfo({cid: this.cid}).then(res => {
                this.cinemaInfo = res.data.cinema
            })
        },
        getCinemaFilmLists(){
            getCinemaFilms({cid: this.cid}).then(res => {
                this.cinemaFilms = res.data.films
            })
        },
        changeFilm(index){
            console.log(this.cinemaFilms[index])
            this.activeFilmInfo = this.cinemaFilms[index];
            let date = this.activeFilmInfo.showDate[0]
            this.$router.push(`/cinema/${this.cid}/film/${this.activeFilmInfo.filmId}/${date}`)
        },
        goBack(){
            history.go(-2)
        }
    },
    components: {
        CinemaBanner
    }
}
</script>
<style lang="scss" scoped>
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
</style>