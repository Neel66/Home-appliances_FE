import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ForgotpasswoedService } from './forgotpasswoed.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  num: any;
  emailid: any = '';
  otp: any = '';
  newpassword: any = '';
  confirmpassword: any = '';
  disable: boolean = false;
  msg: any;
  status: any;
  subject = new Subject();
  err: boolean = false;
  isReadOnly: boolean = false;
  constructor(private service: ForgotpasswoedService,
    private message: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // random(){
  //   this.num =  Math.floor(Math.random() * 10000);
  //   console.log(this.num)
  // }

  sendemail() {
    if (this.emailid.length === 0) {
      alert('Please Fill Email Box')
      //this.message.setMsg({message : })
    }
    else {
      this.num = Math.floor(Math.random() * 10000);
      this.service.sendmail(this.emailid, this.num)
        .subscribe(res => {
          if (res.status == 1) {
            console.log(res.message)
            this.err = true;
            this.status = 'success'
            this.msg = res.message;
            setTimeout(() => {
              this.subject.next(this.err = false)
            }, 3000);
          }
          else {
            this.err = true;
            this.status = 'error'
            this.msg = res.message;
            setTimeout(() => {
              this.subject.next(this.err = false)
            }, 3000);
          }
        })
    }
  }

  setMsg(err: any) {
    this.subject.next(err);
    setTimeout(() => {
      console.log("err", err)
      this.subject.next(err = false)
      console.log(err)
    }, 3000);
  };

  otpverification() {
    console.log('num', this.num);
    console.log('otp', this.otp);
    if (this.otp == this.num) {
      this.isReadOnly == true;
      console.log(this.isReadOnly)
      alert('verification Successfully ')
      this.disable = true;
    }
    else {
      alert('Please valid OTP')

    }
  }

  updatapassword() {
    if (this.newpassword.length == 0 || this.newpassword.length == 0) {
      alert('Please Fill Password')
    }
    else if (this.confirmpassword !== this.newpassword) {
      alert('Do Not match your Confirm Password')
    }
    else {
      this.service.forgotpaasword(this.emailid, this.confirmpassword)
        .subscribe(res => {
          console.log(res)
          this.message.setMsg({ msg: "Password Update SuccessFully", type: 'success' })
          this.router.navigate(['/user/login'])
        })
    }
  }
}
