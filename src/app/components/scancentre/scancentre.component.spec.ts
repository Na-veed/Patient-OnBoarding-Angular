import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScancentreComponent } from './scancentre.component';

describe('ScancentreComponent', () => {
  let component: ScancentreComponent;
  let fixture: ComponentFixture<ScancentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScancentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScancentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
