import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  url = 'http://localhost:4000/productname'
  url1 = 'http://localhost:4000/productcomapany'
  url2 = "http://localhost:4000/cart/cartlist"
  constructor( private http:HttpClient) { }
  
  productname(): Observable<any>{
    return this.http.get(this.url)
  }

  productcompany(): Observable<any>{
  return this.http.get(this.url1)
  }

  cart(id:number): Observable<any>{
    const body = {
      id : id
    }
    return this.http.post(this.url2, body)
  }
}
