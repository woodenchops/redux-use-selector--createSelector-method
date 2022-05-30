
import * as actionType from '../actions/actionTypes';
import {createReducer} from '@reduxjs/toolkit';


export const modalReducer = createReducer(false, {
    [actionType.MODAL_CLOSED]: (state) => !state
})
