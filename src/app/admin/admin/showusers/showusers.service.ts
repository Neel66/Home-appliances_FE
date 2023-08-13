import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShowusersService {
  url = "http://localhost:4000/user/users"
  url1 = 'http://localhost:4000/user/userdelete'
  url2 = 'http://localhost:3000/user/users'
  url3 = 'http://localhost:3000/user/delete'
  constructor(private http : HttpClient) { }

  users(page : any):Observable<any>{
    console.log('ser', page)
    return this.http.post('http://localhost:3000/v1/auth/get', page)
  }

  delete(id:any):Observable<any>{
    return this.http.post(this.url3, id)
  }
}
