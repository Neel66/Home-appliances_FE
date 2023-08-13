import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllproductService } from './allproduct.service';

describe('AllproductService', () => {
  let service: AllproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AllproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
