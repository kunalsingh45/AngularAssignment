import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.scss']
})
export class CountdownTimerLogsComponent implements OnInit, OnChanges{

  @Input() counterStatus: string;
  statusArray:string[]=[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.counterStatus)
    let date = new Date();
    if(this.counterStatus == "start"){
      this.statusArray.push("Started at " + date)
    } else if(this.counterStatus == "pause"){
      this.statusArray.push("Paused at " + date)
    } else if(this.counterStatus == "reset"){
      this.statusArray = []
    }
  }

}
