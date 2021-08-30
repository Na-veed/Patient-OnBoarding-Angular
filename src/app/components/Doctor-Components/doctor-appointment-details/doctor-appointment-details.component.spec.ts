import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDetailsComponent } from './doctor-appointment-details.component';

describe('DoctorAppointmentDetailsComponent', () => {
  let component: DoctorAppointmentDetailsComponent;
  let fixture: ComponentFixture<DoctorAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
