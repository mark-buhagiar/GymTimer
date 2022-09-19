import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppState } from 'src/app/ngrx/state/app.state';
import { Store } from '@ngrx/store';
import { addTime } from 'src/app/ngrx/actions/stopwatch.actions';
import { Size } from 'src/app/constants/sizes';

@Component({
  selector: 'app-time-renderer',
  templateUrl: './time-renderer.component.html',
  styleUrls: ['./time-renderer.component.scss'],
})
export class TimeRendererComponent implements OnChanges {
  @Input() value: string = '';
  @Input() fontSize: Size = Size.LARGE;

  timeSize: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnChanges(): void {
    this.timeSize = this.getTimeSize();
  }

  getTimeSize(): string {
    switch (this.fontSize) {
      case Size.LARGE: {
        return 'font-lg';
      }
      case Size.SMALL: {
        return 'font-sm';
      }
    }
  }

  onTimeClicked = () => {
    this.store.dispatch(addTime());
  };
}
