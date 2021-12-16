import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoundownTimerServiceService {

  counterTimer = new Subject();
  counterStatus = new Subject();
  counterStatusWithTime = new Subject();
  
  constructor() { }
}
