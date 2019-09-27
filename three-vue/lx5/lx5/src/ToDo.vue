<template>
  <div>
    <h1>vue指令</h1>
    <add @addevt="insert($event)"></add>
    <show :data="lists" @delevt="delItem($event)"></show>
  </div>
</template>
<script>
import Show from "./views/Show.vue";
import Add from "./views/Add.vue";
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "v-if",
          desc: "判断是否创建元素"
        },
        {
          id: 2,
          name: "v-show",
          desc: "判断是否显示元素"
        },
        {
          id: 3,
          name: "v-on",
          desc: "绑定元素"
        }
      ]
    };
  },
  methods: {
    insert(obj){
      let index = this.lists.findIndex(item => {
        return item.name == obj.name
      })
      if(index === -1){
        this.lists.push({id:this.lists[this.lists.length - 1].id+ 1,...obj})
      }
    },
    delItem(val){
      if(!confirm('sure???')) return;
      let index = this.lists.findIndex(item => {
        return item.id == val
      })
      this.lists.splice(index,1)
    }
  },
  components: {
    Add,
    Show
  }
};
</script>