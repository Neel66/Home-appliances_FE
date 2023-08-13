import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 url = 'http://localhost:4000/pay/payment'
 url1 = 'http://localhost:4000/strip/checkout'
  constructor(private http : HttpClient) { }

  payment(amount:any, email:any):Observable<any>{
    const body = {
      amount : amount,
      email : email
    }
  return this.http.post(this.url, body);
  }

  makePayment(stripeToken:any): Observable<any>{
   return this.http.post(this.url1, {token :stripeToken})
  }
}
