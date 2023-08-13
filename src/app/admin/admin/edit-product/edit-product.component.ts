import { Component, OnInit } from '@angular/core';
import { EditproductService } from './editproduct.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  price : any
  discount : any
  discountprice:any
  image:any
  detailes:any
  companyname : any = 0;
  name :any = 0;
  id : any;
  pname : any = []
  company : any = [];
  imagepath : string = environment.imagepath;
  totalLength : any;
  images : any;

  constructor(private service: EditproductService,
              private router: Router, private activatedRoute : ActivatedRoute,
              private message : MessageService) { 
                this.id = this.activatedRoute.snapshot.params['id']
                if(this.id){
                  this.service.getdetailes(this.id).subscribe( res => {
                    this.price = res.rows[0].price
                    this.discount = res.rows[0].discount
                    this.discountprice = res.rows[0].discountprice
                    this.detailes = res.rows[0].detailes
                    this.companyname = res.rows[0].cid
                    this.name = res.rows[0].name
                    this.image = res.rows[0].image
                  })
                }
              }

  ngOnInit(){
    this.productcompany()
    this.productname()
    

  }
  onselect(id:number){
  console.log(id)
  }
  onSelectImage(event:any)
  {
      this.images = event.target.files[0]
      console.log(this.image)
  }
  onUpdate(){
    console.log(this.image)
  return this.service.editproduct(  this.price,
     this.discount, this.discountprice,
    this.detailes,this.images,this.id)
  .subscribe( res => {
      this.message.setMsg({msg : 'Product Update Successfully', type: 'success'})
      this.router.navigate(['/admin/allproduct'])
  })
  }

  productname(){
    this.service.productname()
    .subscribe( res => {
      this.pname = res.rows
    })
  }
  
  productcompany(){
    this.service.productcompany()
    .subscribe( res =>{
      this.company = res.rows
    })
  }
}
