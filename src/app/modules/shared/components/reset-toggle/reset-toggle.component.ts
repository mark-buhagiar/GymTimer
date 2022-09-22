import { Component } from '@angular/core';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { resetTime } from 'src/app/ngrx/actions/stopwatch.actions';
import NoSleep from '../../../../helpers/nosleep';

@Component({
  selector: 'app-reset-toggle',
  templateUrl: './reset-toggle.component.html',
  styleUrls: ['./reset-toggle.component.scss'],
})
export class ResetToggleComponent {
  noSleep: NoSleep;

  constructor(private store: Store<AppState>) {
    this.noSleep = new NoSleep();
  }

  resetClicked = () => {
    this.noSleep.enable();
    this.store.dispatch(resetTime());
  };
}
