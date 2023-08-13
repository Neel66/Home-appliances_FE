import { Component, OnInit } from '@angular/core';
import { AddretailerService } from './addretailer.service';
import { MessageService } from 'src/app/services/message.service';
import {  FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatch} from './passwordmatch'
@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {
   username:any =''
   emailid:any = ''
   mobileno:any = ''
   password:any = ''
   confirmpassword:any
   signupForm !: FormGroup;
   success !: boolean;
  constructor(private service:AddretailerService,
             private message:MessageService,
             private router: Router,    private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.signupForm = this.builder.group ({
      username :  ['', {validators : [Validators.required]}],
      email :  ['', {validators : [Validators.required, Validators.email]}],
      mobile :  ['', {validators : [Validators.required,Validators.minLength(10),Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]}],
      password :  ['', {validators : [Validators.required, Validators.minLength(6)]}],
      confirmPassword: ''
    }, {
        validators: passwordMatch

      })
  }
  submit(){
   this.service.signup(this.signupForm.value).subscribe(res => {
     if(res.status == 1){
      this.success = false;
      console.log(res.status);
      this.router.navigate(['/admin/retailers'])
     }
    else{
    this.success = true;
    }
   })
  }
// signup(){
//   if(this.emailid.length === 0 || this.username.length === 0 || this.mobileno.length === 0 || this.password.length === 0)
//   {
//     this.message.setMsg({msg: "Please Fill All The Detailes" , type: "danger"})
//   }
//   else if(this.password.length < 6){
//     this.message.setMsg({msg: "Password Must Be Above 6 Character", type: 'danger'})
//   }
//   else if(this.password !== this.confirmpassword){
//     this.message.setMsg({ msg: 'Password & Confirm Password Do not Match', type: 'danger'})
//     }
//   else{
//  this.service.signup(this.username,this.emailid,this.mobileno,this.password)
// .subscribe ( (res) => {
//   if(res.code == 23505  && res.constraint == "retailer_emailid_key"){
//     this.message.setMsg({msg: "EmailId Already registration, please use differnt EmailId", type: 'danger'})
//   }
//   else if(res.code == 23505 && res.constraint == "retailer_mobileno_key"){
//     this.message.setMsg({msg: "Mobile No Already registration, please use differnt MobileNo", type: 'danger'})
//   }else{
//     this.message.setMsg({msg: "Retailer Add Successfully" , type: "success"})
//     this.router.navigate(['/admin/retailers'])
//   }
// })
//   }
// }
}
