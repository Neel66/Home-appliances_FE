import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ForgotpasswordService } from './forgotpassword.service';

describe('ForgotpasswordService', () => {
  let service: ForgotpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ForgotpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
