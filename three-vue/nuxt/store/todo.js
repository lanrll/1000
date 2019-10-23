export const state = () => {
    list: [{
        text: 'aaa'
    }]
}
export const mutations = {
    add(state,val){
        state.list.push({
            text: val,
            done: false
        })
    },
    remove(state,val){
        state.list.splice(state.list.indexOf(val),1)
    },
    toggle(state,todo){
        todo.done = !todo.done
    }
}