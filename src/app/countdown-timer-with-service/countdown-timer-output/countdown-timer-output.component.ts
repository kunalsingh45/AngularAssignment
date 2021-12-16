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
  constructor(private counterService: CoundownTimerServiceService) { }

  ngOnInit() {
    this.counterService.counterTimer.subscribe((timer)=>{
      this.counterTimer = timer;
    })
  }


}
