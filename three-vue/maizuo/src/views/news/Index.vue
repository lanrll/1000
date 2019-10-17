<template>
    <div v-html="news" class="detailContent">
        <!-- {{news}} -->
    </div>
</template>
<script>
import axios from 'axios'
// import {getNews} from '@/api/news.js'
export default {
    data() {
        return {
            news: '',
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            axios({
                url: 'https://m.maizuo.com/gateway?actId=ElzMZU125260',
                headers:{
                    "X-Host": 'mall.act.static-page.info'
                }
            }).then(res => {
                this.news = res.data.data.data.content
                // console.log(res)
            })
        }
    },
}
</script>
<style lang="scss">
    .detailContent {
    width: 100%;
    overflow: hidden;
    text-align: center;
    display: block;
}
</style>