<template>
  <div class="film-list">
    <banner :data="bannerLists" v-if="bannerLists.length"></banner>
    <tab-nav></tab-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Banner from './components/Banner'
import TabNav from './components/TabNav'
import { getFilmBannerList } from '@/api/film'
export default {
  data(){
    return {
      bannerLists:[]
    }
  },
  created(){
    this.getBannerData()
  },
  components:{
    Banner,
    TabNav
  },
  methods:{
    getBannerData(){
      getFilmBannerList().then((res)=>{
        if(res.status == 0){
          this.bannerLists = res.data
          console.log(this.bannerLists)
        }
      })
    }
  }
}
</script>