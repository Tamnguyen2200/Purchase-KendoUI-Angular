import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsApplyComponent } from './conditions-apply.component';

describe('ConditionsApplyComponent', () => {
  let component: ConditionsApplyComponent;
  let fixture: ComponentFixture<ConditionsApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
