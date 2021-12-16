import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoundownTimerServiceService } from '../coundown-timer-service.service';

@Component({
  selector: 'app-countdown-timer-output',
  templateUrl: './countdown-timer-output.component.html',
  styleUrls: ['./countdown-timer-output.component.scss']
})
export class CountdownTimerOutputComponent implements OnInit {

  intvl:any;
  counterTimer;
  counterStatus;
  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {
    this.counterService.counterTimer.subscribe((timer)=>{
      if(this.counterTimer == undefined || this.counterTimer == 0 || timer == 0){
        this.counterTimer = timer;
      }
    })
    this.counterService.counterStatus.subscribe((status)=>{
      this.counterStatus = status;
      if (this.counterStatus == "start") {
        this.playTimeLine()
      } else if (this.counterStatus == "pause") {
        this.pauseTimeLine()
      } else if (this.counterStatus == "reset") {
        this.pauseTimeLine();
        this.counterService.counterStatusWithTime.next({ status: "reset", value: this.counterTimer })
      }
    })
  }

  playTimeLine() {
    this.intvl = setInterval(() => {
      if (this.counterTimer > 0) {
        this.counterTimer = this.counterTimer - 1
        if(this.counterTimer == 0){
          this.counterService.counterStatusWithTime.next({ status: "finished", value: this.counterTimer })
        }
      }
    }, 1000);
  }

  pauseTimeLine() {
    clearInterval(this.intvl);
    this.counterService.counterStatusWithTime.next({ status: "pause", value: this.counterTimer })
  }


}
