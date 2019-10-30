import {INC,DEL} from '../store/const'
export default {
    inc(base){
        return{
            type:INC,
            base:base
        }
    },
    del(base){
        return{
            type:DEL,
            base:base
        }
    }
}