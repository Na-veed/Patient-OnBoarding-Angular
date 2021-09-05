import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFacilitiesComponent } from './hospital-facilities.component';

describe('HospitalFacilitiesComponent', () => {
  let component: HospitalFacilitiesComponent;
  let fixture: ComponentFixture<HospitalFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
