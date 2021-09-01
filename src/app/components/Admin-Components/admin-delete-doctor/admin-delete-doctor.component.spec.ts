import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteDoctorComponent } from './admin-delete-doctor.component';

describe('AdminDeleteDoctorComponent', () => {
  let component: AdminDeleteDoctorComponent;
  let fixture: ComponentFixture<AdminDeleteDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
