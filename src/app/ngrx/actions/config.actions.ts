import { createAction, props } from '@ngrx/store';

export const actions = {
  SET_INCREMENT: '[CONFIG] SET INCREMENT TIME',
};

export const setIncrement = createAction(
  actions.SET_INCREMENT,
  props<{ incrementAmount: number }>()
);
