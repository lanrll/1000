import {ADD,DELD,EDIT,EDITOK,CHANGE,ALLCHANGE} from '../../store/const'
const initialState = {
    list: [{
        id: 1,
        text: 'asfgsdgh',
        flag: true
    }],
    modelId: 1,
    all:true,
    text:'',
    id:''
}
export default (state = initialState, {type,payload}) => {
    switch (type) {
        case ADD:
            let obj = {
                id: ++state.modelId,
                text:payload,
                flag:true
            }
            state.list.push(obj)
            return state
        case DELD:
            state.list = state.list.filter(item => item.id !== payload)
            return state
        case EDIT:
                state.id = payload
                state.list.map(item => {
                    if(item.id === payload){
                        state.text = item.text
                    }
                })
            return state
        case EDITOK:
                state.list.map(item => {
                    if(item.id === state.id){
                        item.text = payload
                    }
                })
                state.id = ''
                state.text = ''
            return state
        case CHANGE:
            state.list.map(item => {
                if(item.id === payload){
                    item.flag = !item.flag
                }
            })
            let arr = state.list.filter(item => item.flag == true)
            if(state.list.length === arr.length){
                state.all = true
            }else{
                state.all = false
            }
            return state
        case ALLCHANGE:
            state.all = !state.all
            state.list.map(item => item.flag = state.all)
            return state
        default:
                return state
    }
}