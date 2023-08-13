import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductdetailesService } from './productdetailes.service';

describe('ProductdetailesService', () => {
  let service: ProductdetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ProductdetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
