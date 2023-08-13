import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = "http://localhost:4000/user/signup"
  url1 = "http://localhost:5000/user/signup" 
  url2 = "http://localhost:3000/user/signup"
  http: HttpClient
  constructor(private httpclient : HttpClient) { 
    this.http = httpclient
  }

  signup(userData : any): Observable<any>{
  
    return this.http.post(this.url2, userData)
  }
}
