import { Component, OnInit } from '@angular/core';
import { AddproductService } from './addproduct.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  signupForm !: FormGroup;
  username: any = ''
  emailid: any = ''
  mobileno: any = ''
  password: any = ''
  confirmpassword = ''
  company: any = []
  pname: any = []
  price: any
  discount: any
  discountprice: any
  image: any
  detailes: any
  cid: any
  name: any;
  realprice: any;
  dis: any;
  disp: any;
  a: any;
  imageUrl: any;
  error: boolean = false;
  err: any;
  constructor(private service: AddproductService,
    private message: MessageService,
    private router: Router, private builder: FormBuilder) {

  }

  ngOnInit(): void {
    this.productname();
    this.productcompany();
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.builder.group({
      name: [''],
      price: [''],
      discount: [''],
      discountprice: [''],
      image: [''],
      cid: [''],
      detailes: [''],
    })
  }
  onSelectImage(event: any) {
    this.image = event.target.files[0];
  }

  submit() {
    this.service.addproduct(this.price, this.discount, this.discountprice, this.detailes,
      this.cid, this.name, this.image)
      .subscribe((res) => {
        if (res.status == 1) {
          this.message.setMsg({ msg: 'Product Add Successfully', type: 'success' })
          this.router.navigate(['/admin/allproduct'])
        }
        else {
          this.error = true;
          this.err = res.message;
        }
      })
  }


  productname() {
    this.service.productname()
      .subscribe(res => {
        console.log(res)
        this.pname = res.rows
      })
  }

  productcompany() {
    this.service.productcompany()
      .subscribe(res => {

        this.company = res.rows
      })
  }
  onSubmit() {
    this.a = (this.dis / 100) * this.realprice;
    this.disp = this.realprice - this.a
  }

}
