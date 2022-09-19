import { Action, createReducer, on } from '@ngrx/store';
import * as configActions from '../actions/config.actions';
import { ConfigState } from '../state/config.state';

const initialState: ConfigState = {
  incrementAmount: 30,
};

const configReducer = createReducer(
  initialState,
  on(configActions.setIncrement, (state, { incrementAmount }) => ({
    ...state,
    incrementAmount,
  }))
);

export const reducer = (state: ConfigState | undefined, action: Action) =>
  configReducer(state, action);
export const configFeatureKey = 'config';
