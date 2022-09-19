import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StopwatchState } from '../state/stopwatch.state';
import { stopwatchFeatureKey } from '../reducers/stopwatch.reducer';

const selectFeature = createFeatureSelector<StopwatchState>(stopwatchFeatureKey);

export const selectTimeRemaining = () =>
  createSelector(
    selectFeature,
    (stopwatchState: StopwatchState) => stopwatchState.timeRemaining
  );
