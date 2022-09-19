import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { OptionsToggleComponent } from './components/options-toggle/options-toggle.component';
import {
  configFeatureKey,
  reducer,
} from 'src/app/ngrx/reducers/config.reducer';

@NgModule({
  declarations: [OptionsToggleComponent],
  imports: [CommonModule, StoreModule.forFeature(configFeatureKey, reducer)],
  exports: [OptionsToggleComponent],
})
export class ConfigModule {}
