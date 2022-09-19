import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { selectTimeRemaining } from 'src/app/ngrx/selectors/stopwatch.selector';
import { Observable } from 'rxjs';
import { Size } from 'src/app/constants/sizes';

@Component({
  selector: 'app-countdown-display',
  templateUrl: './countdown-display.component.html',
  styleUrls: ['./countdown-display.component.scss'],
})
export class CountdownDisplayComponent implements OnInit {
  countdownValue$: Observable<number>;
  clockSize = Size.SMALL;

  constructor(private store: Store<AppState>) {
    this.countdownValue$ = this.store.select(selectTimeRemaining);
  }

  ngOnInit(): void {}
}
