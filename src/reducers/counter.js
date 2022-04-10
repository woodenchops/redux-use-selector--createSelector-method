import {createReducer} from '@reduxjs/toolkit';
import {counterActions} from '../actions/index'


export const counterReducer = createReducer(0, {
    [counterActions.increment]: (state, action) => {
      return state + action.payload
    },

    [counterActions.decrement]: (state) => {
      return state - 1
    }
})

