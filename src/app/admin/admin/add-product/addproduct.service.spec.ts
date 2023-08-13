import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddproductService } from './addproduct.service';

describe('AddproductService', () => {
  let service: AddproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AddproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
