import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = "http://localhost:4000/useraddress/get";
  url1 = 'http://localhost:4000/payment/get';
  url2 = 'http://localhost:4000/payment/address';
  url3 = 'http://localhost:4000/strip/checkout'
  constructor(private http : HttpClient) { }

  getaddress(id:number): Observable<any>{
    const body = {
      userid : id
    }
    return this.http.post(environment.api + '/get', body)
  }

  getpayment(id:number):Observable<any>{
    const body = {
    id: id
    }
    return this.http.post(this.url1, body)
  }

  selectaddress(id:number,orderid:number):Observable<any>{
  const body ={
    addressid : id,
    orderid : orderid
  }
  return this.http.put(environment.api + '/orderAddress', body)
  }

  makePayment(stripeToken:any): Observable<any>{
    return this.http.post(this.url3, {token :stripeToken})
   }
}

