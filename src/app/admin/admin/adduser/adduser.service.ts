import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  url = "http://localhost:4000/user/usersignup"
  url1 = "http://localhost:3000/user/signup"
  constructor(private http : HttpClient) { }

  signup(userData : any): Observable<any>{
    console.log(userData)
return this.http.post(this.url1,userData)
}
}
