import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowusersService } from './showusers.service';

describe('ShowusersService', () => {
  let service: ShowusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ShowusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
