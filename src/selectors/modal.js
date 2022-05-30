import { createSelector } from "reselect";

export const modalState = (state) => state.hasModalBeenClosed;

export const getModalState = createSelector(modalState, (modal) => {
  return modal;
})
