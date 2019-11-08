var initState ={
    loading:false,
     data: [
        {
          id:1,
          title: 'Ant Design Title 1',
          read:true
        },
        {
          id:2,
          title: 'Ant Design Title 2',
          read:false
        },
        {
          id:3,
          title: 'Ant Design Title 3',
          read:false,
        },
        {
          id:4,
          title: 'Ant Design Title 4',
          read:true
        }
      ]
}

 var reducer = (state = initState, action) => {
     var newState ={...state};
    switch (action.type) {
        case 'START':
          return {...state,loading:true};
        case 'END':{
          return {...state,loading:false};
        }
        case 'ALL_READ':
           
            newState.data.forEach((item)=>{
                item.read=true
            })
            console.log(newState);
            return newState;
        case 'READ_BY_ID':
                newState.data.forEach((item)=>{
                    if(item.id===action.id){
                         item.read=true
                    }
                   
                })
            return newState;
        default:
            return state
    }
}

export default reducer;