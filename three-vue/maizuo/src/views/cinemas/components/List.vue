<template>
   <ul class="cinema-lists">
       <li v-for="item in dataLists" :key="item.cinemaId">
           <router-link :to="`/cinema/${item.cinemaId}`">{{item.name}}-----{{item.cinemaId}}</router-link>
       </li>
   </ul>
</template>
<script>
import { getCinemaList } from '@/api/cinema'
export default {
    data() {
        return {
            dataLists: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            getCinemaList().then(res => {
                this.dataLists = res.data.cinemas
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .cinema-lists{
        font-size: .3rem;
        li{
            line-height: 1.8em;
        }
    }
</style>