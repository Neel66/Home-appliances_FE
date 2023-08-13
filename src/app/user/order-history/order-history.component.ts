import { Component, OnInit } from '@angular/core';
import { OrderhistoryService } from './orderhistory.service';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  userdata : any = [];
  uid: any;
  orders : any = [];
  imagepath: string = environment.imagepath;
  totalLength : any;
  page : number = 1;
  tracking:any;
  date = Date.now();
  tokan : any;
  constructor(private service : OrderhistoryService) {
    this.userdata = JSON.parse(localStorage.getItem('userdata')|| '{}')
    this.tokan = jwtDecode(this.userdata)
    this.uid = this.tokan.id
   }

  ngOnInit(): void {
    this.orderhistory();
  }
  orderhistory(){
    this.service.orderhistory(this.uid).subscribe( res =>{
     // console.log('res',res.data)
     this.orders = res.data.map((order : any) => {
    let items = order.items.map((item : any) => {
      let index = order.Product.findIndex((p : any) => {
        return (p._id.toString() == item.productid.toString())
      })
      item.Product = order.Product[index]
      return item;
    })
    order.items = items;
    return order;
     });
     console.log(this.orders);
    })
  }
}
