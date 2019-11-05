import {INC,DEL, BASE} from '../store/const'
export default {
    inc(){
        return{
            type:INC,
        }
    },
    del(){
        return{
            type:DEL,
        }
    },
    change(e){
        return{
            type:BASE,
            base:e.target.value
        }
    }
}