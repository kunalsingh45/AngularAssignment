import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-output',
  templateUrl: './countdown-timer-output.component.html',
  styleUrls: ['./countdown-timer-output.component.scss']
})
export class CountdownTimerOutputComponent implements OnInit, OnChanges {
  @Input() counterTimer: number;
  @Input() counterStatus: string;
  intvl: any;
  @Output() counterStatusWithTimeEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.counterStatus == "start") {
      this.playTimeLine()
    } else if (this.counterStatus == "pause") {
      this.pauseTimeLine()
    } else if (this.counterStatus == "reset") {
      this.pauseTimeLine();
      this.counterStatusWithTimeEvent.emit({ status: "reset", value: this.counterTimer })

    }
  }

  playTimeLine() {
    this.intvl = setInterval(() => {
      if (this.counterTimer > 0) {
        this.counterTimer = this.counterTimer - 1
        if(this.counterTimer == 0){
          this.counterStatusWithTimeEvent.emit({ status: "finished", value: this.counterTimer })
        }
      }
    }, 1000);
  }

  pauseTimeLine() {
    clearInterval(this.intvl);
    this.counterStatusWithTimeEvent.emit({ status: "pause", value: this.counterTimer })
  }
}
