<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            msg: '未登录！！！'
        }
    },
    mounted() {
        axios({
            url: 'http://localhost:9090/product/list',
            method: 'get',
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.code !== 1){
                this.msg = res.data.msg
            }
        })
    },
    methods: {
        
    },
}
</script>