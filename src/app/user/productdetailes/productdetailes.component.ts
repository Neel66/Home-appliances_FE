import { Component, OnInit } from '@angular/core';
import { ProductdetailesService } from './productdetailes.service';
import { Router, ActivatedRoute} from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetailes.component.html',
  styleUrls: ['./productdetailes.component.css']
})
export class ProductdetailesComponent implements OnInit {
  productdetailes: any;
  productid : any
  userid :  any 
  userdata: any
  quantity : any
  discountprice : any
  totalprice : any
  temp : any;
  imagepath : any = environment.imagepath;
  msg !: boolean ;
err !: boolean;
tokan : any;
  constructor(private service : ProductdetailesService,
             private router :Router,
             private activeroute : ActivatedRoute,
             private message : MessageService) { 
              this.productid = this.activeroute.snapshot.params['id']

              // if(this.productid){
              //   this.service.productdetailes(this.productid)
              //   .subscribe(res => {
              //     console.log(res.data)
              //     this.productdetailes = res.data;
              //    // this.temp = this.productdetailes[0].discountprice
                
              //   })
              // }
              this.tokan =  JSON.parse(localStorage.getItem('userdata') || '{}')
              this.userdata = jwtDecode(this.tokan)
              this.userid = this.userdata.id
             }

  ngOnInit(): void {
    this.pdetailes();
  }

  addtocart(){
    if(this.quantity === 0 || this.quantity == null){
      alert('Quantity must be 1 or More')
    }
    else {
      this.totalprice = this.temp * this.quantity
    
       this.service.addtocart(this.userid, this.productid,this.quantity, this.totalprice)
      
      .subscribe( res => {
      if(res.status == 1){
      this.msg = true
      this.quantity = ''
      this.router.navigate(['/userhome']);
      }
      else{
        alert('Some error, Please try again')
      }
      //this.msg = "This product Add Successfully In Cart"
      //this.message.setMsg({ message :'This product Add Successfully In Cart', type : 'success'})
      })
    }

  }
pdetailes(){
return this.service.productdetailes(this.productid)
.subscribe(res => {
  console.log(res)
  if(res.status == 0){
  this.err = true
  }
  else{
    this.productdetailes = res.data;
    this.temp = this.productdetailes[0].discountprice
    console.log(this.temp)
  }
})
}
}
