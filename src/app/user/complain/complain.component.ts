import { Component, OnInit } from '@angular/core';
import { ComplainService } from './complain.service';
import { MessageService } from 'src/app/services/message.service';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
  userdata : any;
  username : any;
  emailid : any;
  mobileno : any;
  uid : any;
  complain :any = '';
  replydata : any = [];
  tokan : any;
  com !: boolean;
  msg : any;
  er !: boolean;
  err : any;

  constructor( private service : ComplainService,
              private message : MessageService) { 
   this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
   this.tokan = jwtDecode(this.userdata)
   this.uid = this.tokan.id;
  }

  ngOnInit(): void {
    this.getreply();
    this.getUserdetailse();
    console.log(this.uid)
  }
  complains(){
    // if(this.complain.length === 0){
    //   alert('Compalin Box Empty, Please fill your Complain');
    //   }
    //   else{
      console.log(this.complain, this.uid)
      this.service.complain(this.complain,this.uid)
       .subscribe( (res) => {
         if(res.status == 1){
           this.msg = 'Complain Send Successfully';
          this.com = true;
          this.complain = ''
         }
         else{
         this.err = 'Somthing went wrong, Please Try Again'
         this.er = true;
         }
    })
  };

  getreply(){
    this.service.getreply(this.uid)
    .subscribe( res => {
      console.log(res)
      this.replydata = res.data;
    })
  }

  getUserdetailse(){
  this.service.getUserdetailse(this.uid)
  .subscribe( res => {
    this.username = res.data.username
    this.emailid = res.data.email
    this.mobileno = res.data.mobile
    console.log(res)
  })
  }
}
