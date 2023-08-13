import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswoedService {
   url = 'http://localhost:4000/sendmail'
   url1 = 'http://localhost:4000/sendmail/forgotpassword'
  constructor(private http:HttpClient) { }

  sendmail(email:any, num: Number):Observable<any>{
    const body = {
      email:email,
      num : num
    }
  return this.http.post(environment.api + '/sendMail', body)
  }


  forgotpaasword(emailid:any, confirmpassword: any):Observable<any>{
    const body = {
      email : emailid,
      password : confirmpassword
    }
    return this.http.post(environment.api + '/forgotPassword',body)
  }
}
