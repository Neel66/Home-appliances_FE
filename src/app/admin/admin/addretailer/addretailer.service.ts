import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddretailerService {
  url = "http://localhost:4000/admin/signup"
  url1 = "http://localhost:3000/v1/auth/signup"

  constructor(private http: HttpClient) { }
  signup( retailerData : any):Observable<any>{
  return this.http.post(this.url1,retailerData)
  }

}
