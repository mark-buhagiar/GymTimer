import { Component, Input, OnInit } from '@angular/core';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { addTime } from 'src/app/ngrx/actions/stopwatch.actions';

@Component({
  selector: 'app-time-renderer',
  templateUrl: './time-renderer.component.html',
  styleUrls: ['./time-renderer.component.scss'],
})
export class TimeRendererComponent {
  @Input() value: string = '';

  constructor(private store: Store<AppState>) {}

  onTimeClicked = () => {
    this.store.dispatch(addTime());
  };
}
