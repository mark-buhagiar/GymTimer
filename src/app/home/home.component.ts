import { Component, OnInit } from '@angular/core';
import { AppState } from '../ngrx/state/app.state';
import { Store } from '@ngrx/store';
import {
  selectIsStopwatchRunning,
} from '../ngrx/selectors/stopwatch.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stopwatchRunning$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.stopwatchRunning$ = this.store.select(selectIsStopwatchRunning);
  }

  ngOnInit(): void {}
}
