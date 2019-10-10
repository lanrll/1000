<template>
    <div>
        <div>电影头部</div>
        <div>下拉搜索</div>
        <cinema-list></cinema-list>
    </div>
</template>
<script>
import CinemaList from './components/List'
export default {
    components: {
        CinemaList
    }
}
</script>