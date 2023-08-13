import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EditproductService } from './editproduct.service';

describe('EditproductService', () => {
  let service: EditproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(EditproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
