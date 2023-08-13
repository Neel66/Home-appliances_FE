import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddtocartService } from './addtocart.service';

describe('AddtocartService', () => {
  let service: AddtocartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AddtocartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
