import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  url = "http://localhost:4000/cart";
  url1 = "http://localhost:4000/cart/cartlist";
  url3 = 'http://localhost:4000/cart/deletecart';
  url4 = 'http://localhost:4000/order/add';
  url2 = 'http://localhost:4000/order/subtotal';
  url5 = 'http://localhost:4000/strip/checkout'
  constructor(private http: HttpClient) { }

  getcart(id:number):Observable<any>{
  const body = {
    userid : id
  }
    return this.http.post(environment.api + '/getCart', body)
  }

  deletecart(id:number):Observable<any>{
  const body ={
    id : id
  }
  return this.http.post(environment.api + '/deleteCart',body)
  }
//order api
  order(body: any):Observable<any>{
    return this.http.post(environment.api + "/order", body)
  }


  totalpriceadd(subtotalprice : any, c : any):Observable<any>{
    const body = {
      subtotalprice : subtotalprice,
      c : c
    }
    return this.http.post(this.url2,body)
  }

  makePayment(stripeToken:any): Observable<any>{
    return this.http.post(this.url5, {token :stripeToken})
   }
}
