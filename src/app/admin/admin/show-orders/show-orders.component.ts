import { Component, OnInit } from '@angular/core';
import { ShowordersService } from './showorders.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent implements OnInit {
  product: any = [];
  orders: any = [];
  totalLength: any;
  page: number = 1;
  imagepath: string = environment.imagepath;
  constructor(private service: ShowordersService) { }

  ngOnInit(): void {
    this.showorder();
  }
  showorder() {
    this.service.showorder().subscribe(res => {
      
      this.orders = res.data.map((order:any) => {
        let items = order.items.map((item: any) => {
           let index = order.Product.findIndex((p:any) => {
            return (p._id.toString() == item.productid.toString())
           })
           item.Product = order.Product[index];
           return item;
        });
        order.items = items;
        return order;
      });
      console.log("orders", this.orders)
      this.product = res.data.Product
    })
  }
}
