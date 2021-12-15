import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerLogsComponent } from './countdown-timer-logs.component';

describe('CountdownTimerLogsComponent', () => {
  let component: CountdownTimerLogsComponent;
  let fixture: ComponentFixture<CountdownTimerLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
