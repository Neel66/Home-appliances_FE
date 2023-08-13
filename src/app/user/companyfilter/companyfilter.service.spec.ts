import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyfilterService } from './companyfilter.service';

describe('CompanyfilterService', () => {
  let service: CompanyfilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(CompanyfilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
