import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddretailerService } from './addretailer.service';

describe('AddretailerService', () => {
  let service: AddretailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AddretailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
