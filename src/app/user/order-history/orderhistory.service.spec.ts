import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderhistoryService } from './orderhistory.service';

describe('OrderhistoryService', () => {
  let service: OrderhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      
    });
    service = TestBed.inject(OrderhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
