import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerOutputComponent } from './countdown-timer-output.component';

describe('CountdownTimerOutputComponent', () => {
  let component: CountdownTimerOutputComponent;
  let fixture: ComponentFixture<CountdownTimerOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
