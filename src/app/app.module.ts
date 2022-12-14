import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchModule } from './modules/stopwatch/stopwatch.module';
import { ConfigModule } from './modules/config/config.module';
import { ClockModule } from './modules/clock/clock.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    StopwatchModule,
    ConfigModule,
    ClockModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
