import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
    url = 'http://localhost:4000/admin/forgotpassword'
    url1 = 'http://localhost:4000/admin/send'
  constructor(private http: HttpClient) { }

  sendmail(emailid:any, num: Number):Observable<any>{
    const body = {
      emailid:emailid,
      num : num
    }
  return this.http.post(this.url1, body)
  }


  forgotpaasword(emailid:any, confirmpassword: any):Observable<any>{
    const body = {
      emailid : emailid,
      confirmpassword : confirmpassword
    }
    return this.http.put(this.url,body)
  }
}
