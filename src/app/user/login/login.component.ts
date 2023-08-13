import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
//import jwtDecode from 'jwt-decode';

   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any = ''
  password: any = ''
  rememberme !: false
  auth !: boolean;
  siginForm !: FormGroup;

  constructor(private service: LoginService,
    private router: Router,
    private fb: FormBuilder, private messageService: MessageService,
    private route: ActivatedRoute) {
   
  }

  ngOnInit() {
  this.buildForm();
  }
  buildForm(){
    this.siginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  // signin(){
  //   this.router.navigate(['/userhome'])
  // }
  signin(){
   this.service.login(this.siginForm.value).subscribe(res => {
     console.log(res)
     if(res.status == 1){
      localStorage.setItem('userdata', JSON.stringify(res.data.access_token))
      this.messageService.setMsg({ msg: 'Login Successfully', type: 'success' })
       this.router.navigate(['/userhome'])
     } else{
      this.messageService.setMsg({ msg: res.message.msg, type: 'danger' }) 
        }
   })
  }
  // login() {
  //   if(this.emailid.length == 0 || this.password.length == 0){
  //     this.messageService.setMsg({ msg: "Please Fill All Detailes", type: 'danger' }) 
  //   }else{
  //     this.service.login(this.emailid, this.password)
  //     .subscribe(res => {
  //       if(res.token){
  //         localStorage.setItem('userdata', JSON.stringify(res.token))
  //         this.messageService.setMsg({ msg: 'Login Successfully', type: 'success' })
  //         this.router.navigate(['/userhome'])
  //         //console.log(jwtDecode(res.token));
  //       }
  //       else{
  //         this.messageService.setMsg({ msg: " Email-id or Password Wrong", type: 'danger' }) 
  //       }
  //       // if (res.rowCount === 1) {
  //       //   this.auth = true;
  //       //   localStorage.setItem('userdata', JSON.stringify(res.rows[0]))
  //       //   // localStorage['username'] = res['data'][0].username
  //       //   this.messageService.setMsg({ msg: 'Login Successfully', type: 'success' })
  //       //   this.router.navigate(['/userhome'])

  //       // } else {
  //       //   this.auth = false;
  //       //   this.messageService.setMsg({ msg: " Email-id or Password Wrong", type: 'danger' })
  //       // }
  //     })
  //   }
   
  // }

}
