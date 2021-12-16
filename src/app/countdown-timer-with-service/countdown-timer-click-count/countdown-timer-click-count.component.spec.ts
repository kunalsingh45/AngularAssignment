import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerClickCountComponent } from './countdown-timer-click-count.component';

describe('CountdownTimerClickCountComponent', () => {
  let component: CountdownTimerClickCountComponent;
  let fixture: ComponentFixture<CountdownTimerClickCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerClickCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerClickCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
