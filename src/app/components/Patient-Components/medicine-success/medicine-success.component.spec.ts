import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSuccessComponent } from './medicine-success.component';

describe('MedicineSuccessComponent', () => {
  let component: MedicineSuccessComponent;
  let fixture: ComponentFixture<MedicineSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
