<template>
    <div>
        <ul>
            <li><router-link to="/magazines/Now">本期杂志</router-link></li>
            <li><router-link to="/magazines/Old">往期杂志</router-link></li>
        </ul>
        <div class="show">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
// Vue.use(Router)
export default {
    
}
</script>
<style lang="scss">
    ul{
        width: 100%;
        height: 30px;
        li{
            float: left;
            margin: 0 20px;
        }
    }
</style>