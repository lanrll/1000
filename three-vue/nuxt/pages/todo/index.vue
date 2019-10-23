<template>
  <ul>
    <li v-for="(todo,i) in todos" :key="i">
        <p>{{ todo.text }}</p>
      <!-- <input type="checkbox" :checked="todo.done" @change="toggle(todo)"> -->
      <!-- <span :class="{ done: todo.done }">{{ todo.text }}</span> -->
    </li>
    <!-- <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li> -->
    <li><input type="text" v-model="tex" ><input type="button" value="add" @click="add()"> </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            tex:''
        }
    },
  computed: {
    todos () {
        console.log(this.$store.state.list)
      return this.$store.state.todo.list
    }
  },
  methods: {
      ...mapMutations(['add']),
      add(){
          this.add(this.tex)
      },
    // addTodo (e) {
    //   this.$store.commit('todos/add', e.target.value)
    //   e.target.value = ''
    // },
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>