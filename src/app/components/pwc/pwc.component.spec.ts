import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwcComponent } from './pwc.component';

describe('PwcComponent', () => {
  let component: PwcComponent;
  let fixture: ComponentFixture<PwcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
