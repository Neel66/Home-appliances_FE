import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrdermanagementService {
  url = 'http://localhost:4000/order/get';
  url1 = 'http://localhost:4000/order/ordertracking';
  url2 = 'http://localhost:4000/order/confirmorderdate';
  constructor(private http : HttpClient) { }
 
  showorder():Observable<any>{
    return this.http.get(environment.admin + '/order');
    }

    ordertracking(id:any, place:any):Observable<any>{
      const body = {
        id : id,
        ordertraking : place
      }
      return this.http.put(environment.admin + '/updateOrderPlace', body);
    }

    confirmorderdate(id:any,place:any, confirm:any):Observable<any>{
      const body = {
        id : id,
        ordertraking:place,
        confirmorderdate : confirm
      }
      return this.http.put(environment.admin + '/updateOrderPlace', body);
    }
}
