import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CountdownDisplayComponent } from './components/countdown-display/countdown-display.component';
import { reducer, stopwatchFeatureKey } from 'src/app/ngrx/reducers/stopwatch.reducer';

@NgModule({
  declarations: [CountdownDisplayComponent],
  imports: [CommonModule, StoreModule.forFeature(stopwatchFeatureKey, reducer), SharedModule],
  exports: [CountdownDisplayComponent],
})
export class StopwatchModule {}
