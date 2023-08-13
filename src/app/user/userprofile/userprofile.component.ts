import { Component, OnInit } from '@angular/core';
import { UserprofileService } from './userprofile.service';
import { MessageService } from 'src/app/services/message.service';
import jwtDecode from 'jwt-decode';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  id : any = [];
  userdata : any;
  address : any = [];
  user : any = [];
  display = "none";
  houseno : any = ''; 
  street: any = ''; 
   landmark : any = ''; 
   city : any = '';
  district : any = '';  
  state : any = '';
    pincode : any = '';
    emailid : any;
    username:any;
    mobileno:any;
    displays = "none";
    tokan : any;
   add !: boolean;
   subject = new Subject();
   del !: boolean;
   edit !: boolean;
   msg : any;
  constructor(private service : UserprofileService,
                private message : MessageService) { 
    this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}')
    this.tokan = jwtDecode(this.userdata)
    this.id = this.tokan.id
    
  }

  ngOnInit(): void {
    this.getaddress();
    this.getuser();
    
  }
 

  getaddress(){
    const body = {
      userid : this.id
    }
    this.service.getaddress(body)
    .subscribe(res => {
    this.address = res.data;
    })
  }

  addaddress(){
    if(this.houseno.length == 0 || this.street.length == 0 || this.city.length == 0 || this.district.length == 0 ||this.state.length == 0 || this.pincode.length == 0){
      alert('Please Fill All Detailes')
    }
    else{
    this.service.addaddress(this.houseno,this.street,this.landmark,this.city,this.district,this.state,this.id,this.pincode)
    .subscribe( res => {
      console.log(res);
      if(res.status == 1){
        this.add = true;
        this.getaddress();
        setTimeout(() =>{
        this.subject.next(this.add = false)
        },3000)
      }
      else{
        alert('Please Fill Valid Data')
      }
    })
  }
  }

  getuser(){
    console.log('id',this.id)
    const body = {
      id : this.id
    }
 this.service.getuser(body)
  .subscribe( res => {
  this.user = res.data;
  this.emailid = this.user.email;
  this.username = this.user.username;
  this.mobileno = this.user.mobile;

  })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
   this.service.edituser(this.username,this.mobileno,this.id)
   .subscribe( res => {
    if(res.status == 1){
      this.msg = "Profile Edit Successfully"
      this.edit = true;
    }
    else {
      this.msg = "Somthing went wrong"
      this.edit = true;
    }
      setTimeout(() =>{
        this.subject.next(this.edit = false)
        },3000)

   // this.message.setMsg({message : 'Profile Update Successfully'})
   })
    this.display = "none";
    this.getuser();
  }

  deleteaddress(id:number){
    this.service.deleteaddress(id)
    .subscribe( res => {
      if(res.status == 1){
        this.del = true
        this.getaddress();
        setTimeout(() =>{
          this.subject.next(this.del = false)
          },3000)
      };
      
    })
  }

  editaddress(id:number){
  this.service.editaddress(this.houseno,this.street,this.landmark,this.city,this.district,this.state,this.pincode,id)
  .subscribe(res => {
    alert('Address Update Successfully')
  })
  }

  openModals() {
    this.displays = "block";
  }
  onCloseHandleds() {
    this.displays = "none";
  }
}
