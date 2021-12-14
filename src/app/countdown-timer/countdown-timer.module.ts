import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [CountdownTimerComponent ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule
  ]
})
export class CountdownTimerModule { }
