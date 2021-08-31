import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSuccessComponent } from './appointment-success.component';

describe('AppointmentSuccessComponent', () => {
  let component: AppointmentSuccessComponent;
  let fixture: ComponentFixture<AppointmentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
