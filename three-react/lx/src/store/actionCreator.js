export default {
   allRead(){
        return (dispatch) =>{
            dispatch({type:'START'});
            setTimeout(()=>{
                dispatch({
                    type:'ALL_READ'
                })
                dispatch({type:'END'});
            },1000)
        }
     
   },
   readById(id){
    return (dispatch) =>{
        dispatch({type:'START'});
        setTimeout(()=>{
            dispatch({
                type:'READ_BY_ID',
                id
            })
            dispatch({type:'END'});
        },1000)
    }
   }
}