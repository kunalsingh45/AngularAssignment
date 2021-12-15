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
  ngOnInit() {
  }

  getCounterTime(event){
    console.log(event)
    this.counterTime = event;
  }

  getCounterStatus(event){
    console.log(event)
    this.counterStatus = event;
  }
}
