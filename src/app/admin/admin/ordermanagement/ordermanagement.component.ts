import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OrdermanagementService } from './ordermanagement.service';
@Component({
  selector: 'app-ordermanagement',
  templateUrl: './ordermanagement.component.html',
  styleUrls: ['./ordermanagement.component.css']
})
export class OrdermanagementComponent implements OnInit {
  orders : any = [];
  totalLength : any;
  page : number = 1;
  imagepath : string = environment.imagepath;
  place: any;
  confirm : any;

  constructor(private service : OrdermanagementService) { }

  ngOnInit(): void {
    this.showorder();
    this.confirm = new Date();
  }
  showorder(){
    this.service.showorder().subscribe( res => {
      console.log('s',res.data)
    this.orders = res.data.map( (order : any) => {
      let items = order.items.map( (item:any) => {
       let index = order.Product.findIndex( (p:any) => {
        return (p._id.toString() == item.productid.toString())
       })
       item.Product = order.Product[index];
       return item;
      })
      order.items = items;
      return order;
    });
    })
}

     ordertracking(id:any){
      console.log(this.place)
       //console.log('date',this.confirm)
       if(this.place == 'Confirm Order'){
      this.service.confirmorderdate(id,this.place,this.confirm)
      .subscribe(res => {
        console.log(res)
        if(res.status == 0){
          alert('error')
        }
         else{
           this.showorder();
           this.place = '';
         }
       // console.log('confim',res)
      })
       }
       else {
        console.log(id, this.place)
        this.service.ordertracking(id,this.place).subscribe(res => {
          console.log(res)
          if(res.status == 0){
            alert('error')
          }
           else{
             this.showorder();
             this.place = '';
           }
         })
       }
     }

}
