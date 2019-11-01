const initialState = {
    data:[]
}

export default (state = initialState, actions) => {
    switch (actions.type) {
    case 'GET':
        return { ...state}

    default:
        return state
    }
}
