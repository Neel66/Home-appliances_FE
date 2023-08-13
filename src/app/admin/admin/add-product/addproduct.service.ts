import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  url = 'http://localhost:4000/dashboard/addproduct'
  url1 = 'http://localhost:4000/productname'
  url2 = 'http://localhost:4000/productcomapany'
  url3 = 'http://localhost:3000/v1/addproduct'
  apiUrl = 'http://localhost:3000'
  constructor(private http : HttpClient) { }


     addproduct(price:any,discount:any,
                 discountprice:any, detailes:any,
                 cid:any,name:any,
                   image:any) : Observable<any>{
                    const body = new FormData()
                                body.append('price',price)
                                body.append('discount',discount)
                                body.append('discountprice',discountprice)
                                body.append('detailes',detailes)
                                body.append('cid',cid)
                                body.append('name', name)
                                body.append('image',image)
                                console.log('b',body)
      return this.http.post(environment.admin + '/addproduct', body)
     }

 
  productname():Observable<any>{
return this.http.get(this.url1)
  }

  productcompany():Observable<any>{
    return this.http.get(this.url2)
  }

  uploadImage(price :any, image : any) {
    const data = new FormData()
    data.append('image', image)
    data.append('price', price)
    console.log('data',data)
    return this.http.post(environment.admin + '/addproduct', data)
  }
  
}
