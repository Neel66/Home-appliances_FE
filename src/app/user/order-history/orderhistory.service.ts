import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {
   url = 'http://localhost:4000/order/userorderhistory'
  constructor(private http : HttpClient ) { }

  orderhistory(id:number): Observable<any>{
    const body = {
      userid : id
    }
  return this.http.post(environment.api + '/orderHistory', body)
  }
}
