import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowordersService } from './showorders.service';

describe('ShowordersService', () => {
  let service: ShowordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ShowordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
