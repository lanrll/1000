import {INC,DEL, BASE} from '../store/const'

const initialState = {
    a: 1,
    base:1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BASE:
            if(action.base.length>0){
                state.base = Number(action.base)
            }else{
                state.base = 1
            }
            return state
        case INC:
            return {...state,a:state.a+state.base}
            // return {...state,a:state.a+1}
        case DEL:
            if(state.a<=0) return {...state,a:0};
            // return {...state,a:state.a-1}
            return {...state,a:state.a-state.base}
        default:
            return state
    }
}
