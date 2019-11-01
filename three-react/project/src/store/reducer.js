import {combineReducers} from 'redux';
import home from '../components/home/reducer';
var reducer = combineReducers({
    'home': home
})
export {reducer}