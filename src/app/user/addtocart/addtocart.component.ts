import { Component, OnInit } from '@angular/core';
import { AddtocartService } from './addtocart.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  subject = new Subject();
  cart: any = [];
  uid: any
  userdata: any
  userid: any
  cartdata: any
  subtotalprice: any = 0 + 50;
  empty !: boolean;
  imagepath: string = environment.imagepath;
  productid: any;
  cartid: any = [];
  cid: any = [];
  addressid : any = 1;
  totalprice : any;
  count: number = 1;
  tokan : any;
  msg !: boolean;
  message : any;
  constructor(private service: AddtocartService, private router : Router) {
    this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}')
    this.tokan = jwtDecode(this.userdata)
    this.uid = this.tokan.id


  }

  ngOnInit(): void {
    this.getcart();

  }


  getcart() {
    return this.service.getcart(this.uid)
      .subscribe(res =>
      {
        this.empty = false
        this.cart = res.data;
      
        for (let i = 0; i < this.cart.length; i++) {
          this.subtotalprice = this.subtotalprice + this.cart[i].totalprice;
          this.cartid = this.cart[i].id ;

        }
        // for(let i = 0 ; i < this.cart.length; i++){
        //   this.cartid += this.cart[i].id;

        //     }
        //     console.log("cart",this.cart)
        //   console.log("cart id", this.cartid)
      }

        //   }
        //  else{
        //    alert('No Cart Item available')
        //  }
      )
  }
  onSelect() {
    const body = {
      items:this.cart,
      userid :this.uid,
    subtotal : this.subtotalprice
   }
   return this.service.order(body).subscribe( res => {
    if(res.status == 1){
      const id = res.data[0]._id
      this.router.navigate(['/orderAddress/'+ id])
      console.log("cart",id);
    }
    else{
      console.log('hello')
    }
    })
  }



  deletecart(id: number) {
    this.service.deletecart(id)
      .subscribe(res => {
        if(res.status == 1){
        this.message   = "Product delete successfully in cart";
        this.msg = true
        }
        else{
         this.message = 'Error, Please try again after some time'
         this.msg = true;
        }
        this.getcart();
        setTimeout(() =>{
          this.subject.next(this.msg = false)
          },3000)
      })
  }


  OnIncrement()
  {
     this.count = this.count + 1
   //  this.rate = this.temp * this.count
  }

  OnDecrement()
     {
        if(this.count == 1)
        {
            alert('Can not decrement')
        }
        else
        {
            this.count = this.count -1
           // this.rate = this.temp * this.count
        }
     }
}
