import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAppointmentsComponent } from './admin-get-appointments.component';

describe('AdminGetAppointmentsComponent', () => {
  let component: AdminGetAppointmentsComponent;
  let fixture: ComponentFixture<AdminGetAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
