import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerInputComponent } from './countdown-timer-input.component';

describe('CountdownTimerInputComponent', () => {
  let component: CountdownTimerInputComponent;
  let fixture: ComponentFixture<CountdownTimerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
