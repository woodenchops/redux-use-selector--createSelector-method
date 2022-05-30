import {counterReducer} from './counter';
import {isLoggedReducer} from './isLogged';
import {combineReducers} from 'redux';
import { modalReducer } from './modal';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
    hasModalBeenClosed: modalReducer
});

export default allReducers;
