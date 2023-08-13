import { Component, OnInit } from '@angular/core';
import { ForgotpasswordService } from './forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  num : any;
  emailid:any = '';
  otp:any = '';
  newpassword : any = '';
  confirmpassword : any = '';
  disable : boolean = false;
  constructor(private service : ForgotpasswordService) { }

  ngOnInit(): void {
  }
  sendemail(){
    if(this.emailid.length === 0){
      alert('Please Fill Email Box')
      //this.message.setMsg({message : })
    }
    else {
    
    this.num =  Math.floor(Math.random() * 10000);
    this.service.sendmail(this.emailid,this.num)
    .subscribe( res => {
      if(res.rowCount === 0){
        alert('This Email-Id is not Register, Please write valid Email-Id')
      }
      else{
        alert('Mail Send Successfully, please check your Mail Box')
        console.log(res)
      }
     
    })
  }
  }

  otpverification(){
    console.log('num',this.num);
    console.log('otp', this.otp);
    if(this.otp == this.num){
      
      alert('verification Successfully ')
      this.disable = true;
    }
    else {
     alert('Please valid OTP')
   
    }
  }
  
  updatapassword(){
    if(this.newpassword.length == 0 || this.newpassword.length == 0){
      alert('Please Fill Password')
    }
    else if(this.confirmpassword !== this.newpassword){
    alert('Do Not match your Confirm Password')
    }
    else{
      this.service.forgotpaasword(this.emailid,this.confirmpassword)
      .subscribe( res => {
        console.log(res)
        alert('Update Password Successfully')
      })
    }
  }
}
