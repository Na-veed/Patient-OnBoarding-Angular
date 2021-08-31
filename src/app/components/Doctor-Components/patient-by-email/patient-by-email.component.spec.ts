import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientByEmailComponent } from './patient-by-email.component';

describe('PatientByEmailComponent', () => {
  let component: PatientByEmailComponent;
  let fixture: ComponentFixture<PatientByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientByEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
