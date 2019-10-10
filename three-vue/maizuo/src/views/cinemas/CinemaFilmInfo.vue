<template>
    <div>
        <h3>{{filmInfo.name}}</h3>
        <p>
            <template v-for="(item,index) in filmInfo.showDate" >
                <router-link :to="`/cinema/${$route.params.cid}/film/${$route.params.fid}/${item}`" :key="item" style="margin-left:0.15rem">{{item}}</router-link>
                <br :key="item+'-'+index"> 
            </template>
        </p>
            <ul>
                <li v-for="item in schedules" :key="item.scheduleId">{{item.hallName}}</li>
            </ul>
    </div>
</template>
<script>
import { getCinemaFilmSchedule} from '@/api/cinema';
export default {
    props: ['filmInfo'],
    data() {
        return {
            schedules: []
        }
    },
    watch: {
        $route: {
            handler(val){
                this.getData()
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        getData(){
            let id1 = this.$route.params.cid,
                id2 = this.$route.params.fid,
                dat = this.$route.params.date
            getCinemaFilmSchedule({cid: id1, fid: id2, date: dat}).then(res => {
                this.schedules = res.data.schedules
            })
        }
    },
}
</script>