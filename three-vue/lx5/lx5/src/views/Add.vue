<template>
  <div>
    <p>
      <label>指令名：</label>
      <input type="text" v-model="orders.name" />
    </p>
    <p>
      <label>作用：</label>
      <textarea cols="30" rows="5" v-model="orders.desc"></textarea>
    </p>
    <button @click="add()">添加</button>
  </div>
</template>
<script>
let initOrders = {
  name: "",
  desc: ""
};
export default {
  data() {
    return {
      orders: { ...initOrders }
    };
  },
  methods: {
      add(){
          this.$emit('addevt', this.orders)
      }
  },
};
</script>