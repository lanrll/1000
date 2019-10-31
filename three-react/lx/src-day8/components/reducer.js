import {INC,DEL} from '../store/const'

const initialState = {
    a: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {...state,a:state.a+action.base}
        case DEL:
            if(state.a<=0) return {...state,a:0};
            return {...state,a:state.a-action.base}
        default:
            return state
    }
}
