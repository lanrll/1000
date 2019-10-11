<template>
  <div>
    <div class="header">
        <p>名：  <input type="text" v-model="kw" />
        简介：<textarea cols="0" rows="5" v-model="kwdesc"></textarea>
      <!-- <input type="button" :value="isok ? '添加':'保存'" @click="isok ? add(): Preservation()" /></p> -->
      <input type="button" value="添加" @click="add()" /></p>
    </div>
    <div class="show">
      <ul>
        <li v-for="(item,index) in lists" :key="index">
          <h3>{{item.name}}</h3>
          <p>{{item.desc}}</p>
          <input type="button" value="保存" @click="Preservation(index)" v-if="isshow==index" />
          <input type="button" value="修改" @click="edit(index)" v-else/>
          <input type="button" value="删除" @click="del(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kw: "",
      isok: true,
      nowkw: null,
      isshow: -1,
      kwdesc: "",
      lists: [
        {
          name: "v-if",
          desc: "什么都有"
        },
        {
          name: "v-show",
          desc: "什么都有"
        },
        {
          name: "v-else-if",
          desc: "什么都有"
        },
        {
          name: "v-bind",
          desc: "什么都有"
        },
        {
          name: "v-for",
          desc: "什么都有"
        }
      ]
    };
  },
  methods: {
    add() {
      let index = this.lists.findIndex(item => {
        return item.name == this.kw
      })
      if (index == -1) {
        this.lists.push({ name: this.kw, desc: this.kwdesc });
      }else{
          alert('已存在！')
      }
    },
    del(val) {
      this.lists.splice(val, 1);
    },
    edit(index){
        this.isok = false
        this.isshow = index
        this.kw = this.lists[index].name
        this.kwdesc = this.lists[index].desc
    },
    Preservation(index){
        this.isok = true
        let obj = {name: this.kw, desc: this.kwdesc}
        // this.lists.splice(this.nowkw,1,obj)
        this.lists.splice(index,1,obj)
        this.isshow = -1
        this.kw = ''
        this.kwdesc = ''
    }
  }
};
</script>
<style lang="scss">
input,
textarea {
  outline-style: auto;
}
</style>