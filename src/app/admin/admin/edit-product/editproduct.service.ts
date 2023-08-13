import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditproductService {
  url = "http://localhost:4000/dashboard/editproduct"
  url1 = 'http://localhost:4000/productname'
  url2 = 'http://localhost:4000/productcomapany'
  url3 = 'http://localhost:4000/dashboard'
  constructor(private http : HttpClient) { }
  editproduct(price:any,
     discount:any,
    discountprice:any,
    detailes:any,   images: any,id:number,
 
    ):Observable<any>{
      const body = new FormData()
      body.append('price',price)
      body.append('discount',discount)
      body.append('discountprice',discountprice)
     
      body.append('detailes',detailes)
      body.append('image',images)

       
    return this.http.put(this.url + '/' + id, body)
  }
  productname():Observable<any>{
    return this.http.get(this.url1)
      }
    
      productcompany():Observable<any>{
        return this.http.get(this.url2)
      }

      getdetailes(id:number):Observable<any>{
        return this.http.get(this.url3 + '/' + id)
      }
    }
