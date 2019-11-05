import axios from 'axios';
export default  {
    get(){
        return (dispatch) => {
            axios('https://jsonplaceholder.typicode.com/users').then((res => {
                // console.log(res)
                dispatch({
                    type: 'GET',
                    payload: res.data
                })
            }))
        }
    }
}