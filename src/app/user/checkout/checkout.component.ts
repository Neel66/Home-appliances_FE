import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userid : any;
  userdata : any;
  username : any;
  emailid : any;
  mobileno : any;
  address :  any = [];
  payment : any = [];
  total : any;
  paymentHandler:any = null;
  tokan : any;
  orderid : any;
  constructor(private service : CheckoutService, private activeroute : ActivatedRoute, private router : Router) { 
  this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
  this.tokan = jwtDecode(this.userdata)
  this.userid = this.tokan.id;
  this.username = this.tokan.username;
  this.emailid = this.tokan.emailid;
  this.mobileno = this.tokan.mobileno; 
  this.orderid = this.activeroute.snapshot.params['id']
  }

  ngOnInit(): void {
 this.getaddress();
 this.getpayment();
 this.invokeStripe();
  }

  getaddress(){
    this.service.getaddress(this.userid)
    .subscribe(res => {
      if(res.status == 1){
        this.address = res.data;
      }
      else{
        alert(res.message)
      }
    })
  }
 
  getpayment(){
  this.service.getpayment(this.userid)
  .subscribe( res => {
    console.log(res)
    this.payment = res.rows[0];
    this.total = this.payment.subtotal
  })
  }
  onSelect(id:number){
    console.log(id,this.orderid)
   this.service.selectaddress(id,this.orderid).subscribe( res => {
      // this.router.navigate(['/payment'])
       console.log(res)
     }
   )
   const paymentHandler = (<any>window).StripeCheckout.configure({
    key : "pk_test_51KxXvhSF81P9FE2GvRtZZmGuiwAloHDi6Yme3o1IHcoIDFm3nzQqf9R2lUUGJbGcktjWCbM5mgKG99MVVnQEclvC00RrFbtt7A",
    locale: 'auto',
    token:function( stripeToken:any){
      console.log(stripeToken);
      paymentStripe(stripeToken);
    }
    });
    const paymentStripe = (stripeToken : any) => {
      this.service.makePayment(stripeToken).subscribe( res => {
        console.log(res);
      })
    }
    paymentHandler.open({
      name : this.username,
     // description: "TV",
      amount: this.total
    })
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KxXvhSF81P9FE2GvRtZZmGuiwAloHDi6Yme3o1IHcoIDFm3nzQqf9R2lUUGJbGcktjWCbM5mgKG99MVVnQEclvC00RrFbtt7A',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  }
}
