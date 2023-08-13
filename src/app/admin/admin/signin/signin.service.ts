import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  url = 'http://localhost:4000/admin/signin'
  url1 = 'http://localhost:3000/v1/auth/login'
  constructor(private http: HttpClient) { }
   login(admin:any):Observable<any>{
     return this.http.post(this.url1, admin)
   }

   checkUser() {
    return !!localStorage.getItem('admin');
  }
}
