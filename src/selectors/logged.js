import { createSelector } from "reselect";

export const loggedState = (state) => state.isLogged;

export const getLoggedState = createSelector(loggedState, (logged) => {
  return logged;
})
