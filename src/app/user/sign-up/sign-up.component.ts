import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import {  FormGroup, NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { passwordMatch, mustContainSymbol } from './sign-up.validatores';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm !: FormGroup;
  username: any = ''
  emailid:any = ''
  mobileno: any = ''
  password: any = ''
  confirmpassword = ''
  constructor(private service : SignupService,
    private router: Router,  private fb: FormBuilder,
    private messageService:MessageService,
    private builder: FormBuilder) { 
      // this.signupForm = this.fb.group({
      //   username: ['', Validators.required],
      //   emailid: ['', Validators.required],
      //   mobileno: ['', Validators.required],
      //   password : ['', Validators.required]
      // })
    }

  ngOnInit(): void {
    this.buildForm();
  }

 
  buildForm() {
    this.signupForm = this.builder.group ({
      username :  ['', {validators : [Validators.required]}],
      email :  ['', {validators : [Validators.required, Validators.email]}],
      mobile :  ['', {validators : [Validators.required,Validators.minLength(10),Validators.maxLength(10),  Validators.pattern("^[0-9]*$")]}],
      password :  ['', {validators : [Validators.required, Validators.minLength(6)]}],
      confirmPassword: '',
      checkbox : ['', {validators : [Validators.required]}]
    }, {
        validators: passwordMatch
      } )
  }
  submit(){
    console.log('value',this.signupForm.value)
   this.service.signup(this.signupForm.value).subscribe((res) => {
    if(res.status == 1){
      this.messageService.setMsg({ msg: 'Registration Successful! Please Login', type: 'danger'})
      this.router.navigate(['/user/login'])
    }
    else if(res.status == 0 || res.msg == 'Email is allready registration' || res.msg == 'Mobile-No is allready registration')
    {
      this.messageService.setMsg({ msg: res.msg, type: 'danger'})
    }
 
   else{
    this.messageService.setMsg({ msg: res.message, type: 'danger'})
   }
  })
  }

// signup(){
//   if(this.username.length === 0 || this.emailid.length === 0 || this.mobileno.length === 0 || this.password.length === 0 || this.confirmpassword.length === 0){
//     this.messageService.setMsg({ msg: 'Please Fill All The Detailes', type: 'danger'})
//   }
//   else  if(this.password.length < 6){
//     this.messageService.setMsg({msg: "Password Must Be Above 6 Character", type: 'danger'})
//   }
//   // else if(this.mobileno.length  === 9){
//   //   this.messageService.setMsg({ msg : 'Mobile No Must be 10 Digit', type : 'danger'})
//   // }
//   else if(this.password !== this.confirmpassword){
//   this.messageService.setMsg({ msg: 'Password & Confirm Password Do not Match', type: 'danger'})
//   }
//   else{
//   this.service.signup(this.username, this.emailid, this.mobileno, this.password)
//   .subscribe((res) => {
//     console.log(res)
//     if(res.code == 23505  && res.constraint == "users_emailid_key"){
//       this.messageService.setMsg({msg: "EmailId Already registration, please use differnt EmailId", type: 'danger'})
//     }
//     else if(res.code == 23505 && res.constraint == "users_mobileno_key"){
//       this.messageService.setMsg({msg: "Mobile No Already registration, please use differnt MobileNo", type: 'danger'})
//     }
//     else{
//       this.messageService.setMsg({ msg: 'Registration Successful! Please Login', type: 'success' })
//       this.router.navigate(['/user/login'])
//     }
//   })
//   }
// }

//  color(){
//   document.body.style.background = "Red";
// }
}
