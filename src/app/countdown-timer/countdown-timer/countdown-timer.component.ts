import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  constructor() { }
  counterTime: number= -1;
  counterStatus:string;
  counterStatusFromOutput:any
  ngOnInit() {
  }

  getCounterTime(event){
    this.counterTime = event;
  }

  getCounterStatus(event){
    this.counterStatus = event;
  }

  getCounterStatusWithTime(event){
    this.counterStatusFromOutput = event
  }
}
