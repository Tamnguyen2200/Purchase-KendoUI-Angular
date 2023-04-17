import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROGRAMDETAILSINFORMATIONComponent } from './program-details-information.component';

describe('PROGRAMDETAILSINFORMATIONComponent', () => {
  let component: PROGRAMDETAILSINFORMATIONComponent;
  let fixture: ComponentFixture<PROGRAMDETAILSINFORMATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROGRAMDETAILSINFORMATIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PROGRAMDETAILSINFORMATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
