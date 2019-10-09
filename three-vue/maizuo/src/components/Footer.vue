<template>
     <ul class="nav-bar">
        <li>
            <router-link to="/">
                <img src="@/assets/imgs/film.png" />
                <span>电影</span>
            </router-link>
        </li>
        <li>
            <router-link to="/cinemas">
                <img src="@/assets/imgs/download.png" />
                <span>影院</span>
            </router-link>
        </li>
        <li>
            <router-link to="/new">
                <img src="@/assets/imgs/news.png" />
                <span>资讯</span>
            </router-link>
        </li>
        <li>
            <router-link to="/my">
                <img src="@/assets/imgs/my.png" />
                <span>我的</span>
            </router-link>
        </li>
    </ul>
</template>
<style scoped lang="scss">
.nav-bar{
    height: .98rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index:100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: .2rem;
    background-color: #fff;
}
.nav-bar:before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.nav-bar li{
    flex: 1;
    text-align: center;
    height: .98rem;
}
.nav-bar  a{
    color: #797d82;
    display: block;
    height: .98rem;
    line-height: 0.56rem;
    width: 100%;
    position: relative;
    padding-top:0.08rem;
    box-sizing: border-box;
    &:hover{
        color: #f40;
    }
}
.nav-bar img{
    width: 0.42rem;
    height: 0.42rem;
}
.nav-bar span{
    position: absolute;
    top:0.5rem;
    left:50%;
    transform: translateX(-50%);
}
</style>