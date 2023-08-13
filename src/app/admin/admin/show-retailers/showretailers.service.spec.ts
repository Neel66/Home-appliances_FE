import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowretailersService } from './showretailers.service';

describe('ShowretailersService', () => {
  let service: ShowretailersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ShowretailersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
