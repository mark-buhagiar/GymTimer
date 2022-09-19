import { Component } from '@angular/core';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { resetTime } from 'src/app/ngrx/actions/stopwatch.actions';

@Component({
  selector: 'app-reset-toggle',
  templateUrl: './reset-toggle.component.html',
  styleUrls: ['./reset-toggle.component.scss'],
})
export class ResetToggleComponent {
  constructor(private store: Store<AppState>) {}
  
  resetClicked = ()=>{
    this.store.dispatch(resetTime())
  }
}
