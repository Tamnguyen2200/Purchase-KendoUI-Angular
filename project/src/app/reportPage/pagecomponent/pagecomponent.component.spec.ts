import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecomponentComponent } from './pagecomponent.component';

describe('PagecomponentComponent', () => {
  let component: PagecomponentComponent;
  let fixture: ComponentFixture<PagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
