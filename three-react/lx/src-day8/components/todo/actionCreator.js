import { ADD, DELD, EDIT, CHANGE, ALLCHANGE, EDITOK } from "../../store/const";

export default {
    add(text){
        return {
            type:ADD,
            payload: text
        } 
    },
    del(id){
        return {
            type:DELD,
            payload:id
        }
    },
    edit(id){
        return {
            type:EDIT,
            payload:id
        }
    },
    change(id){
        return {
            type:CHANGE,
            payload:id
        }
    },
    changeAll(flag){
        return {
            type:ALLCHANGE,
            // payload: flag
        }
    },
    editOk(text){
        return {
            type:EDITOK,
            payload: text
        }
    }
}