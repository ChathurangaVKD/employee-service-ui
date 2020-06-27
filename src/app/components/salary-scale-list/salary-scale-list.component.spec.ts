import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryScaleListComponent } from './salary-scale-list.component';

describe('SalaryScaleListComponent', () => {
  let component: SalaryScaleListComponent;
  let fixture: ComponentFixture<SalaryScaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryScaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
