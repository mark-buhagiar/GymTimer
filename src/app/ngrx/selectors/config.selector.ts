import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ConfigState } from '../state/config.state';
import { configFeatureKey } from '../reducers/config.reducer';

const selectFeature = createFeatureSelector<ConfigState>(configFeatureKey);

export const selectIncrementAmount = createSelector(
  selectFeature,
  (configState: ConfigState) => configState.incrementAmount
);
