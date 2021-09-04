import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientListComponent } from './admin-patient-list.component';

describe('AdminPatientListComponent', () => {
  let component: AdminPatientListComponent;
  let fixture: ComponentFixture<AdminPatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPatientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
