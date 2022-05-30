import { createSelector } from "reselect";

export const modalState = (state) => state.hasModalBeenClosed;

export const getHasModalBeenClosedState = createSelector(modalState, (modal) => {
  return modal;
})
