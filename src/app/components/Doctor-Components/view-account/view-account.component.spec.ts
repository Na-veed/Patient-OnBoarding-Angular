import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountComponentOfDoctor } from './view-account.component';

describe('ViewAccountComponent', () => {
  let component: ViewAccountComponentOfDoctor;
  let fixture: ComponentFixture<ViewAccountComponentOfDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountComponentOfDoctor ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountComponentOfDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
