import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShowordersService {
  url = 'http://localhost:4000/order/get';
  constructor(private http : HttpClient) { }

  showorder():Observable<any>{
  return this.http.get(environment.admin + '/order');
  }
}
