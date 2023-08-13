import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductdetailesService {
 url = "http://localhost:4000/dashboard"
 url1 = "http://localhost:4000/cart"
  constructor(private http : HttpClient) { }

  productdetailes(id: number):Observable<any>{
    return this.http.get(environment.api + '/productdetailes/' + id)
  }

  addtocart(userid:any, productid:any, quantity:any,totalprice:any):Observable<any>{
  const body = {
    userid : userid,
    productid : productid,
    quantity : quantity,
    totalprice : totalprice
  }
  return this.http.post(environment.api +'/addtoCart', body)
  }

 
}
