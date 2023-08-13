import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComplainService } from './complain.service';

describe('ComplainService', () => {
  let service: ComplainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ComplainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
