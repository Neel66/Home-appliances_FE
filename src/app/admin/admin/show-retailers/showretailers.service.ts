import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowretailersService {

  url = 'http://localhost:4000/admin/retailer';
  url1 = `http://localhost:4000/admin`
  url2 = 'http://localhost:3000/v1/auth/get'
  url3 = 'http://localhost:3000/v1/delete'
  constructor(private http: HttpClient) { 
    
  }

 retailer():Observable<any>{
  return this.http.get(this.url2)
 }
 delete(id : any):Observable<any>{
   return this.http.post(this.url3,id)
 }
}
