import { TestBed } from '@angular/core/testing';

import { LisProductService } from './lis-product.service';

describe('LisProductService', () => {
  let service: LisProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LisProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
