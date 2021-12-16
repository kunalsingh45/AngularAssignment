import { TestBed } from '@angular/core/testing';

import { CoundownTimerServiceService } from './coundown-timer-service.service';

describe('CoundownTimerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoundownTimerServiceService = TestBed.get(CoundownTimerServiceService);
    expect(service).toBeTruthy();
  });
});
