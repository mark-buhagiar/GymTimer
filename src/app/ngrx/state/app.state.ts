import { configFeatureKey } from '../reducers/config.reducer';
import { stopwatchFeatureKey } from '../reducers/stopwatch.reducer';
import { ConfigState } from './config.state';
import { StopwatchState } from './stopwatch.state';

export interface AppState {
  [configFeatureKey]: ConfigState;
  [stopwatchFeatureKey]: StopwatchState;
}
