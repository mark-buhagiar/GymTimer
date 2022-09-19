import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './components/time-display/time-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TimeDisplayComponent],
  imports: [CommonModule, SharedModule],
  exports: [TimeDisplayComponent],
})
export class TimeDisplayModule {}
