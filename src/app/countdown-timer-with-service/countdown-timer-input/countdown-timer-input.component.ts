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
  intvl:any;
  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {

  }

  startCounter() {
    if(this.counter == undefined || this.counter <= 0){
      alert("please enter value greater than 0 to start timer")
      return 0
    }
    this.toggleButton = false
    console.log(this.counter)
    this.counterService.counterStatus.next("start");
    this.counterService.counterTimer.next(this.counter)
    this.playTimeLine();
  }
  pauseCounter() {
    this.toggleButton = true
    this.counterService.counterStatus.next("pause")
    this.pauseTimeLine()
    this.pausedTimeArray.push(this.counter)
  }
  resetCounter() {
    this.counterService.counterStatus.next("reset")
    this.counter = 0;
    this.toggleButton = true
    this.counterService.counterTimer.next(this.counter)
    this.pauseTimeLine();
    this.pausedTimeArray = [];

  }

  playTimeLine() {
    
    this.intvl = setInterval(() => {
      if(this.counter > 0){
        this.counter = this.counter -1
        if (this.counter == 0){
          this.toggleButton = true
        }
        this.counterService.counterTimer.next(this.counter)
      }
    }, 1000);
  }

  pauseTimeLine(){
    clearInterval(this.intvl);
  }

}
