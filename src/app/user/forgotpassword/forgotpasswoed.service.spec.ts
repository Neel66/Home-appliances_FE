import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ForgotpasswoedService } from './forgotpasswoed.service';

describe('ForgotpasswoedService', () => {
  let service: ForgotpasswoedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ForgotpasswoedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
