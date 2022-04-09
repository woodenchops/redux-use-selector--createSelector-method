import { createSelector } from "reselect";

export const counterState = (state) => state.counter;

export const getCounterState = createSelector(counterState, (counter) => {
  return counter;
})
