import { Action, createReducer, on } from '@ngrx/store';
import * as stopwatchActions from '../actions/stopwatch.actions';
import { StopwatchState } from '../state/stopwatch.state';

const initialState: StopwatchState = {
  timeRemaining: 0,
};

const stopwatchReducer = createReducer(
  initialState,
  on(stopwatchActions.resetTime, (state) => initialState),
  on(stopwatchActions.setTime, (state, { time }) => ({
    ...state,
    timeRemaining: time,
  })),
  on(stopwatchActions.decrementSecond, (state) => ({
    ...state,
    timeRemaining: state.timeRemaining - 1,
  }))
);

export const reducer = (state: StopwatchState | undefined, action: Action) =>
  stopwatchReducer(state, action);
export const stopwatchFeatureKey = 'stopwatch';
