import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AllproductService {
  url = 'http://localhost:4000/dashboard/products';
  url1 = 'http://localhost:4000/dashboard/delete';
  url2 = 'http://localhost:3000/v1/product';
  constructor(private httpClient: HttpClient) {}

  getproduct(): Observable<any> {
    return this.httpClient.get(this.url2);
  }

  deleteproduct(id: number): Observable<any> {
    console.log('id :>> ', id);
    const body = {
      id: id,
    };
    return this.httpClient.post(environment.api + '/deleteProduct', body);
  }
}
