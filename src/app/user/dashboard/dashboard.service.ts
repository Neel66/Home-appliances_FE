import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http: HttpClient
   url = 'http://localhost:4000/dashboard/products'
   url1 = 'http://localhost:4000/productname'
   url2 = "http://localhost:4000/cart/cartlist"
  constructor(httpClient: HttpClient) {
    this.http = httpClient
   }
  
  product():Observable<any>{
  return this.http.get(environment.api +'/product')
  }

  productname():Observable<any>{
    return this.http.get(this.url1)
      }

      cart(id:number): Observable<any>{
        const body = {
          id : id
        }
        return this.http.post(this.url2, body)
      }
}
