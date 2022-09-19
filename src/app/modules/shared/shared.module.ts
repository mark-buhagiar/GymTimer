import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormatAsMinutesAndSeconds } from './pipes/format-as-minutes-and-seconds.pipe';
import { IffNotNullOrUndefinedPipe } from './pipes/iff-not-null-or-undefined.pipe';
import { TimeRendererComponent } from './components/time-renderer/time-renderer.component';
import { StopwatchEffects } from 'src/app/ngrx/effects/stopwatch.effects';
import { ResetToggleComponent } from './components/reset-toggle/reset-toggle.component';

@NgModule({
  declarations: [
    FormatAsMinutesAndSeconds,
    IffNotNullOrUndefinedPipe,
    TimeRendererComponent,
    ResetToggleComponent,
  ],
  imports: [CommonModule, EffectsModule.forFeature([StopwatchEffects])],
  exports: [
    FormatAsMinutesAndSeconds,
    IffNotNullOrUndefinedPipe,
    TimeRendererComponent,
    ResetToggleComponent,
  ],
})
export class SharedModule {}
