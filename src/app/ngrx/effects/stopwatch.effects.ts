import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, switchMap, tap } from 'rxjs/operators';
import {
  actions as StopwatchActions,
  decrementSecond,
  setTime,
} from '../actions/stopwatch.actions';
import { selectTimeRemaining } from '../selectors/stopwatch.selector';
import { selectIncrementAmount } from '../selectors/config.selector';
import { AppState } from '../state/app.state';
import { interval } from 'rxjs';

@Injectable()
export class StopwatchEffects {
  decrementTimeInterval = createEffect(() =>
    interval(1000).pipe(
      concatLatestFrom(() => [this.store.select(selectTimeRemaining)]),
      filter(([_, timeRemaining]) => timeRemaining > 0),
      switchMap(() => [decrementSecond()])
    )
  );

  addTime$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StopwatchActions.ADD_TIME),
      concatLatestFrom(() => [
        this.store.select(selectTimeRemaining),
        this.store.select(selectIncrementAmount),
      ]),
      switchMap(([_, timeRemaining, incrementAmount]) => [
        setTime({ time: timeRemaining + incrementAmount }),
      ])
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
