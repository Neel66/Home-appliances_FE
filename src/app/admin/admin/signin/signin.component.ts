import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  emailid = ''
  password = ''
  rememberme = false
  siginForm !:  FormGroup
  email !: boolean;
  pass !: boolean;
  constructor(private service : SigninService,
              private router : Router,
              private message :MessageService,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.buildForm()
  }
  buildForm(){
    this.siginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  signin(){
    console.log(this.siginForm.value)
    this.service.login(this.siginForm.value).subscribe(res => {
      console.log(res);
    if(res.message == 'Login successfully'){
      this.email = false
      localStorage.setItem('admin', JSON.stringify(res.tokan))
      this.router.navigate(['/admin/homepage'])
    }
    else if(res.msg == 'emailid is a wrong'){
      this.email = true;
      this.pass = false;
    }
     else if(res.message.msg == 'Password is a wrong'){
       this.email = false;
       this.pass = true;
      }
     
})
  }
  // login(){
  //   if(this.emailid.length === 0 || this.password.length === 0){
  //     alert('Please Fill All The Detailes')
  //   // this.message.setMsg({ message:"Please Fill All The Detailes" , type: 'danger'})
  //   }
  //   else{
  //  this.service.login(this.emailid, this.password)
  //   .subscribe( res => {
  //   if(res.rowCount === 0){

  //     alert('EmailId & Password Wrong')
  //   }
  //   else{
  //  alert('Login Successfully');
  //  localStorage.setItem('admin', JSON.stringify(res.rows[0]))
  //  this.router.navigate(['/admin/homepage'])
    
  //   }
  //   // this.message.setMsg({ message:"Login Successfully", type: 'success'})
  
  
  //   })
  // }
  // }

}
