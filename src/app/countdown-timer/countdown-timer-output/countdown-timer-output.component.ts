import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-output',
  templateUrl: './countdown-timer-output.component.html',
  styleUrls: ['./countdown-timer-output.component.scss']
})
export class CountdownTimerOutputComponent implements OnInit, OnChanges {
  @Input() counterTimer: number;
  @Input() counterStatus: string;
  intvl:any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.counterTimer)
    console.log(this.counterStatus)
    // if(this.counterStatus =="start"){
    //   this.playTimeLine(this.counterTimer)
    // } else if(this.counterStatus == "pause"){
    //     this.pauseTimeLine(this.counterTimer)
    // }
  }

  // playTimeLine(value) {
    
  //   this.intvl = setInterval(() => {
  //      this.counterTimer = this.counterTimer -1
  //   }, 1000);
  // }

  // pauseTimeLine(value){
  //   clearInterval(this.intvl);
  // }
}
