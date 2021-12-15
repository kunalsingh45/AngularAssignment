import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-clicks-count',
  templateUrl: './countdown-timer-clicks-count.component.html',
  styleUrls: ['./countdown-timer-clicks-count.component.scss']
})
export class CountdownTimerClicksCountComponent implements OnInit,OnChanges {

  @Input() counterStatus: string;
  startCount: number= 0;
  pauseCount: number= 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.counterStatus)
    if(this.counterStatus == "start"){
      this.startCount = this.startCount + 1;
    } else if(this.counterStatus == "pause"){
      this.pauseCount = this.pauseCount + 1;
    }else if(this.counterStatus == "reset"){
      this.startCount = 0;
      this.pauseCount = 0;
    }
  }
}
