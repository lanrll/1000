<template>
    <div>
        <button @click="film">1</button>
        <!-- <button @click="">2</button> -->
        <!-- <button>3</button> -->
        <!-- <button>4</button> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        film(){
            console.log(this.$router)
            this.$router.query
        }
    },
    component:{

    }
}
</script>