import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCouponComponent } from './information-coupon.component';

describe('InformationCouponComponent', () => {
  let component: InformationCouponComponent;
  let fixture: ComponentFixture<InformationCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
