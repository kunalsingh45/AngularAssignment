import { Component, OnInit } from '@angular/core';
import { CoundownTimerServiceService } from '../coundown-timer-service.service';

@Component({
  selector: 'app-countdown-timer-click-count',
  templateUrl: './countdown-timer-click-count.component.html',
  styleUrls: ['./countdown-timer-click-count.component.scss']
})
export class CountdownTimerClickCountComponent implements OnInit {

  counterStatus: any;
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {

    this.counterService.counterStatus.subscribe((status) => {
      this.counterStatus = status;
      if (this.counterStatus == "start") {
        this.startCount = this.startCount + 1;
      } else if (this.counterStatus == "pause") {
        this.pauseCount = this.pauseCount + 1;
      } else if (this.counterStatus == "reset") {
        this.startCount = 0;
        this.pauseCount = 0;
      }
    })
  }

}
