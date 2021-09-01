import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBuyMedicinesComponent } from './patient-buy-medicines.component';

describe('PatientBuyMedicinesComponent', () => {
  let component: PatientBuyMedicinesComponent;
  let fixture: ComponentFixture<PatientBuyMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBuyMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBuyMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
