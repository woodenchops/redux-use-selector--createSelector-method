import * as actionType from './actionTypes';
import {createAction} from '@reduxjs/toolkit'

export const counterActions = {
    increment: createAction(actionType.INCREMENT),
    decrement: createAction(actionType.DECREMENT)
}

export const loggedInActions = {
    toggleLoggedStatus: createAction(actionType.SIGN_UP),
}

