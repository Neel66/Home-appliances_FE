import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdduserService } from './adduser.service';
import {  FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { passwordMatch } from './passwordmatch';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  username: any = ''
  emailid:any = ''
  mobileno: any = ''
  password: any = ''
  confirmpassword = ''
  signupForm !: FormGroup;
  success !: boolean;

  constructor(private service : AdduserService,
    private router: Router,  private fb: FormBuilder,
    private messageService:MessageService,
    private builder: FormBuilder) { }

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
      console.log(res)
      this.router.navigate(['/admin/showusers']);
        }
        else{
          this.success = true;
        }
   
  })
  }
  // signup(){
  //   if(this.username.length === 0 || this.emailid.length === 0 || this.mobileno.length === 0 || this.password.length === 0 || this.confirmpassword.length === 0){
  //     this.messageService.setMsg({ msg: 'Please Fill All The Detailes', type: 'danger'})
  //   }else{

    
  //   if(this.password.length < 6){
  //     this.messageService.setMsg({msg: "Password Must Be Above 6 Character", type: 'danger'})
  //   }
  //   else if(this.password !== this.confirmpassword){
  //     this.messageService.setMsg({msg: "Password & Confirm Password Do not Match", type: 'danger'}) 
    
  //   }
  //   else{
  //   this.service.signup(this.username, this.emailid, this.mobileno, this.password)
  //   .subscribe((res) => {
  //     console.log(res)
  //     if(res.code == 23505 && res.constraint == "users_emailid_key"){
  //       this.messageService.setMsg({msg: "EmailId Already registration, please use differnt EmailId", type: 'danger'})
  //       return;
  //     }
  //     else if(res.code == 23505 && res.constraint == "users_mobileno_key"){
  //       this.messageService.setMsg({msg: "Mobile No Already registration, please use differnt MobileNo", type: 'danger'})
  //     }
  //     else{
  //       this.messageService.setMsg({ msg: 'Add User Successful', type: 'success' });
  //       this.router.navigate(['/admin/showusers']);
  //     }
  //   })
  //   }
  // }
  // }
}
