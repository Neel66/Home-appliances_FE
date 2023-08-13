import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
   url = 'http://localhost:4000/category/name'
  constructor(private http:HttpClient) { }

  productsname(name :any):Observable<any>{
    const body = {
      name : name
    }
    return this.http.post(this.url,body)
  }
}
