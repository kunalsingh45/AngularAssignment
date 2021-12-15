import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerInputComponent } from './countdown-timer-input/countdown-timer-input.component';
import { CountdownTimerLogsComponent } from './countdown-timer-logs/countdown-timer-logs.component';
import { CountdownTimerClicksCountComponent } from './countdown-timer-clicks-count/countdown-timer-clicks-count.component';
import { CountdownTimerOutputComponent } from './countdown-timer-output/countdown-timer-output.component';

@NgModule({
  declarations: [CountdownTimerComponent, CountdownTimerInputComponent, CountdownTimerLogsComponent, CountdownTimerClicksCountComponent, CountdownTimerOutputComponent ],
  imports: [
    CommonModule,
    FormsModule,
    CountdownTimerRoutingModule
  ]
})
export class CountdownTimerModule { }
