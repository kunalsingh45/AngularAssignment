import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-input',
  templateUrl: './countdown-timer-input.component.html',
  styleUrls: ['./countdown-timer-input.component.scss']
})
export class CountdownTimerInputComponent implements OnInit {

  counter: number;
  toggleButton: boolean = true;
  pausedTimeArray = [];
  @Output() counterTimeEvent = new EventEmitter<number>();
  @Output() counterStatusEvent = new EventEmitter<string>();
  intvl:any;
  constructor() { }

  ngOnInit() {

  }

  startCounter() {
    if(this.counter == undefined || this.counter <= 0){
      return 0
    }
    this.toggleButton = false
    console.log(this.counter)
    this.counterStatusEvent.emit("start");
    this.counterTimeEvent.emit(this.counter)
    this.playTimeLine();
  }
  pauseCounter() {
    this.toggleButton = true
    this.counterStatusEvent.emit("pause")
    this.pauseTimeLine()
    this.pausedTimeArray.push(this.counter)
  }
  resetCounter() {
    this.counterStatusEvent.emit("reset")
    this.counter = 0;
    this.toggleButton = true
    this.counterTimeEvent.emit(this.counter)
    this.pauseTimeLine();
    this.pausedTimeArray = [];

  }

  playTimeLine() {
    
    this.intvl = setInterval(() => {
      if(this.counter > 0){
        this.counter = this.counter -1
        this.counterTimeEvent.emit(this.counter)
      }
    }, 1000);
  }

  pauseTimeLine(){
    clearInterval(this.intvl);
  }


}
