import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicineListComponent } from './admin-medicine-list.component';

describe('AdminMedicineListComponent', () => {
  let component: AdminMedicineListComponent;
  let fixture: ComponentFixture<AdminMedicineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedicineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
