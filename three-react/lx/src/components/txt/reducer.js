const initialState = {
    list:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case 'GET':
        // let newState = {...state}
        // newState.list = payload
        // console.log(state)
        // return newState
        return {...state,list:payload}
    default:
        return state
    }
}
