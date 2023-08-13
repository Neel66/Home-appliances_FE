import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  url = "http://localhost:4000/useraddress/get";
  url1 = 'http://localhost:4000/user/singleuser';
  url2 = 'http://localhost:4000/useraddress/add';
  url3 = 'http://localhost:4000/user/edituser';
  url4 = 'http://localhost:4000/useraddress/addressdelete'
  urel5 = 'http://localhost:4000/useraddress/addressedit';
  url6 = "http://localhost:3000/user/profile"
  url7 = "http://localhost:3000/user/address";
  url8 = "http://localhost:3000/user/get";
  url9 = "http://localhost:3000/user/delAddress";
  url10 = "http://localhost:3000/user/update"
  constructor(private http : HttpClient) { }

  getaddress(id:any): Observable<any>{
    return this.http.post(this.url8, id)
  }

  getuser(id:any):Observable<any>{
    console.log(id)
    return this.http.post(this.url6,id)
  }

  addaddress(houseno:any, street:any, landmark:any, city:any, district:any, state:any, id:any, pincode:any):Observable<any>{
   const body = {
    houseno : houseno,
     street : street, landmark : landmark,
    city : city, district : district,
     state : state, id : id, pincode : pincode
   }
   return this.http.post(this.url7, body)
  }

  edituser(username:any,mobileno:any,id:number):Observable<any>{
   const body = {
     username : username,
     mobile:mobileno,
     id:id
   }
   return this.http.put(this.url10, body)
  }

  deleteaddress(id:number):Observable<any>{
    const body = {
      id :id
    }
    
   return this.http.post(this.url9,body)
  }

  editaddress(houseno:any, street:any, landmark:any, city:any, district:any, state:any, pincode:any,id:number):Observable<any>{
const body ={
  houseno:houseno, street:street, landmark:landmark, city:city,
   district:district, state:state, pincode:pincode,id:id
}
return this.http.put(this.urel5, body)
  }
}
