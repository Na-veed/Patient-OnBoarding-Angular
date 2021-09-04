import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorListComponent } from './admin-doctor-list.component';

describe('AdminDoctorListComponent', () => {
  let component: AdminDoctorListComponent;
  let fixture: ComponentFixture<AdminDoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoctorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
