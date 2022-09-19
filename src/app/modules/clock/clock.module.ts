import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClockComponent],
})
export class ClockModule {}
