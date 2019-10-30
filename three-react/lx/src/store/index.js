import {createStore} from 'redux';
import {reducer} from './reducer';


var store = createStore(reducer);

export default store;