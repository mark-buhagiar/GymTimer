import { createAction, props } from '@ngrx/store';

export const actions = {
  RESET_TIME: '[STOPWATCH] RESET TIME',
  ADD_TIME: '[STOPWATCH] ADD TIME',
  SET_TIME: '[STOPWATCH] SET TIME',
  DECREMENT_SECOND: '[STOPWATCH] DECREMENT SECOND',
};

export const resetTime = createAction(actions.RESET_TIME);
export const addTime = createAction(actions.ADD_TIME);
export const setTime = createAction(
  actions.SET_TIME,
  props<{ time: number }>()
);
export const decrementSecond = createAction(actions.DECREMENT_SECOND);
