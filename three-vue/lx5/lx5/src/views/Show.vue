<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <h3>{{item.name}}</h3>
        <p>{{item.desc}}</p>
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
      del(id){
          this.$emit('delevt', id)
      }
  },
}

</script>