import {combineReducers} from 'redux';
import test from '../components/reducer';
import todo from '../components/todo/reducer';
var reducer = combineReducers({
    "test":test,
    'todo':todo
})
export {reducer}