import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSearchComponent } from './import-search.component';

describe('ImportSearchComponent', () => {
  let component: ImportSearchComponent;
  let fixture: ComponentFixture<ImportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
