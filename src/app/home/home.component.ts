import { Component, OnInit } from '@angular/core';
import { AppState } from '../ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { selectTimeRemaining } from '../ngrx/selectors/stopwatch.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stopwatchRunning: boolean = false;

  constructor(private store: Store<AppState>) {
    this.store
      .select(selectTimeRemaining())
      .subscribe((x) => (this.stopwatchRunning = x > 0));
  }

  ngOnInit(): void {}
}
