import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-input',
  templateUrl: './countdown-timer-input.component.html',
  styleUrls: ['./countdown-timer-input.component.scss']
})
export class CountdownTimerInputComponent implements OnInit, OnChanges {

  counter: number;
  toggleButton: boolean = true;
  pausedTimeArray = [];
  @Output() counterTimeEvent = new EventEmitter<number>();
  @Output() counterStatusEvent = new EventEmitter<string>();
  @Input() counterStatusFromOutput;
  intvl:any;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
      if(this.counterStatusFromOutput.status == "pause"){
        this.pausedTimeArray.push(this.counterStatusFromOutput.value)
      } else if (this.counterStatusFromOutput.status == "finished"){
        this.toggleButton = true
      }
  }
  startCounter() {
    if(this.counter == undefined || this.counter <= 0){
      alert("please enter value greater than 0 to start timer")
      return 0
    }
    this.toggleButton = false
    this.counterStatusEvent.emit("start");
    this.counterTimeEvent.emit(this.counter)
  }
  pauseCounter() {
    this.toggleButton = true
    this.counterStatusEvent.emit("pause")
  }
  resetCounter() {
    this.counterStatusEvent.emit("reset")
    this.counter = 0;
    this.toggleButton = true
    this.counterTimeEvent.emit(this.counter)
    this.pausedTimeArray = [];

  }

  // playTimeLine() {
    
  //   this.intvl = setInterval(() => {
  //     if(this.counter > 0){
  //       this.counter = this.counter -1
  //       if (this.counter == 0){
  //         this.toggleButton = true
  //       }
  //       this.counterTimeEvent.emit(this.counter)
  //     } 
  //   }, 1000);
  // }

  // pauseTimeLine(){
  //   clearInterval(this.intvl);
  // }


}
