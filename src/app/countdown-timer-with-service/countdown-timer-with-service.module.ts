import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerWithServiceRoutingModule } from './countdown-timer-with-service-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerInputComponent } from './countdown-timer-input/countdown-timer-input.component';
import { CountdownTimerOutputComponent } from './countdown-timer-output/countdown-timer-output.component';
import { CountdownTimerLogsComponent } from './countdown-timer-logs/countdown-timer-logs.component';
import { CountdownTimerClickCountComponent } from './countdown-timer-click-count/countdown-timer-click-count.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountdownTimerComponent, CountdownTimerInputComponent, CountdownTimerOutputComponent, CountdownTimerLogsComponent, CountdownTimerClickCountComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountdownTimerWithServiceRoutingModule
  ]
})
export class CountdownTimerWithServiceModule { }
