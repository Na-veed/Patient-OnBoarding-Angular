import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletePatientComponent } from './admin-delete-patient.component';

describe('AdminDeletePatientComponent', () => {
  let component: AdminDeletePatientComponent;
  let fixture: ComponentFixture<AdminDeletePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeletePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeletePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
