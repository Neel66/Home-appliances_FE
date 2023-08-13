import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComplainService {
   url =  "http://localhost:4000/complain/user";
   url1 = "http://localhost:4000/complain/getreply";
   url2 = "http://localhost:3000/user/complain"
  constructor(private http : HttpClient) { }

  complain( complain : any, uid : any): Observable<any>{
    const body = {
      complain : complain,
      uid : uid
    }
    return this.http.post(this.url2, body)
  }

  getreply(uid:number):Observable<any>{
    const body = {
    id:uid
    }
    return this.http.post(environment.api + '/getComplain', body)
  }

  getUserdetailse(id : any) : Observable<any>{
    const body = {
      id:id
      }
      console.log(body)
   return this.http.post(environment.api + '/profile', body)
  }
}
