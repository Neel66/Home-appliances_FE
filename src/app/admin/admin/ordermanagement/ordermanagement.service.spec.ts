import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdermanagementService } from './ordermanagement.service';

describe('OrdermanagementService', () => {
  let service: OrdermanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(OrdermanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
