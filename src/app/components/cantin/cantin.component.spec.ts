import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantinComponent } from './cantin.component';

describe('CantinComponent', () => {
  let component: CantinComponent;
  let fixture: ComponentFixture<CantinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
