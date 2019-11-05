import {combineReducers} from 'redux';
import test from '../components/reducer';
import todo from '../components/todo/reducer';
import  txt from '../components/txt/reducer';
var reducer = combineReducers({
    "test":test,
    'todo':todo,
    'txt': txt
})
export {reducer}