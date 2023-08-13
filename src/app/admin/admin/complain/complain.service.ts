import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  url = "http://localhost:4000/complain/admin"
  url1 = "http://localhost:4000/complain/delete"
  url2 = "http://localhost:4000/complain/reply"
  url3 = "http://localhost:3000/user/complain"
  url4 = "http://localhost:3000/user/replyComplain"
  url5 = "http://localhost:3000/user/delComplain"
  constructor(private http: HttpClient) { }

  complains():Observable<any>{
    return this.http.get(this.url3)
  }

  delete(id:any):Observable<any>{
    console.log(id)
     return this.http.post(this.url5,id)
    }
  // delete(id:number):Observable<any>{
  //  return this.http.delete(this.url1 + '/' + id)
  // }

  reply(id:number, reply:any):Observable<any>{
    const body = {
     id:id,
     reply:reply
    }
    console.log(body)
    return this.http.put(this.url4,body)
  }
}
