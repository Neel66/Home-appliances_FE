import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:4000/user/login' 
  url1 = 'http://localhost:5000/user/login'
  url2 = 'http://localhost:3000/user/login'
  constructor(private http: HttpClient) { }

  login(userdata:any): Observable<any> {
   
  return this.http.post(this.url2, userdata)
  }

  checkUser() {
    return !!localStorage.getItem('userdata');
  }
}
