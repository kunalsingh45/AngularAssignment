import { Component, OnInit } from '@angular/core';
import { CoundownTimerServiceService } from '../coundown-timer-service.service';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.scss']
})
export class CountdownTimerLogsComponent implements OnInit {

  counterStatus: any;
  statusArray: string[] = []

  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {

    this.counterService.counterStatus.subscribe((status) => {
      this.counterStatus = status;
      let date = new Date();
      if (this.counterStatus == "start") {
        this.statusArray.push("Started at " + date)
      } else if (this.counterStatus == "pause") {
        this.statusArray.push("Paused at " + date)
      } else if (this.counterStatus == "reset") {
        this.statusArray = []
      }
    })
  }

}
