import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyfilterService {
  url = 'http://localhost:4000/category/company'
  constructor(private http : HttpClient) { }

  company(name:any):Observable<any>{
    const body = {
      name : name
    }
    return this.http.post(this.url,body)
  }
}
