import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerClicksCountComponent } from './countdown-timer-clicks-count.component';

describe('CountdownTimerClicksCountComponent', () => {
  let component: CountdownTimerClicksCountComponent;
  let fixture: ComponentFixture<CountdownTimerClicksCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerClicksCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerClicksCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
