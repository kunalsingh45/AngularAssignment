import { Component, OnInit } from '@angular/core';
import { CoundownTimerServiceService } from '../coundown-timer-service.service';

@Component({
  selector: 'app-countdown-timer-input',
  templateUrl: './countdown-timer-input.component.html',
  styleUrls: ['./countdown-timer-input.component.scss']
})
export class CountdownTimerInputComponent implements OnInit {
  counter: number;
  toggleButton: boolean = true;
  pausedTimeArray = [];
  intvl: any;
  counterStatusFromOutput: any
  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {
    this.counterService.counterStatusWithTime.subscribe((statusObj) => {
      this.counterStatusFromOutput = statusObj
      if (this.counterStatusFromOutput.status == "pause") {
        this.pausedTimeArray.push(this.counterStatusFromOutput.value)
        this.counterService.counterTimer.next(this.counterStatusFromOutput.value)
      } else if (this.counterStatusFromOutput.status == "finished") {
        this.toggleButton = true
      }
    })
  }

  startCounter() {
    if (this.counter == undefined || this.counter <= 0) {
      alert("please enter value greater than 0 to start timer")
      return 0
    }
    this.toggleButton = false
    this.counterService.counterStatus.next("start");
    this.counterService.counterTimer.next(this.counter)
  }
  pauseCounter() {
    this.toggleButton = true
    this.counterService.counterStatus.next("pause")
  }
  resetCounter() {
    this.counterService.counterStatus.next("reset")
    this.counter = 0;
    this.toggleButton = true
    this.counterService.counterTimer.next(this.counter)
    this.pausedTimeArray = [];

  }
}
