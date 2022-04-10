
import * as actionType from '../actions/actionTypes';
import {createReducer} from '@reduxjs/toolkit';


export const isLoggedReducer = createReducer(false, {
    [actionType.SIGN_UP]: (state) => !state
})

