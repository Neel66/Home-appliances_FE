import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdduserService } from './adduser.service';

describe('AdduserService', () => {
  let service: AdduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AdduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
