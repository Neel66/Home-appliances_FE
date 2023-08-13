import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  email : any = "patelneel662001@gmail.com";
  amount : any = 1;
  paymentHandler:any = null;
  constructor(private service : PaymentService) { }

  ngOnInit(): void {
    this.invokeStripe();
  }
// payment(){
// this.service.payment(this.amount,this.email).subscribe(res => {
//   var information={
//     action:"https://securegw-stage.paytm.in/order/process",
//     params:res
// }

//   console.log(res);
// })
// }

makePayment(amount : any){
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
  name : "Neel",
  description: "TV",
  amount: 100
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
