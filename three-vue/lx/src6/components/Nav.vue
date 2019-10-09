<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <div class="nav">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/magazines">杂志</router-link></li>
                <li><router-link to="/subscribe">订阅</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    .header{
        width: 100%;
        height: 50px;
        .logo{
            float: left;
            padding: 5px 0;
            width: 5%;
            height: 80%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .nav{
        float: right;
        height: 50px;
        line-height: 30px;
        li{
            float: left;
            margin: 0 20px;
            font-size: 20px;
            padding:  10px;
            
        }
    }
</style>