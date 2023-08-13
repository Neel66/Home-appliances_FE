import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   product !: any []
   pname : any = []
   query : any;
   imagepath : string = environment.imagepath;
   totalLength : any;
  page : number = 1;
  cart: any;
  userdata: any;
  sid: any;
  tokan : any;

  constructor(private service: DashboardService,
             private router : Router) {
              this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}')
              this.tokan = jwtDecode(this.userdata)
              this.sid = this.tokan.id
              }

  ngOnInit() {
    this.products();
    this.carts();
  }
products(){
 this.service.product()
 .subscribe(res => {
   this.product = res.data;
 //  this.totalLength = res.rowCount;
//   if (response['status'] == 'success') {
//     this.product = response['data']
//   } else {
//     alert('error')
//   }
 }
)
}

productname(){
  this.service.productname()
  .subscribe( res => {
    this.pname = res.rows
  })
}

onSelect(pid:number){
this.router.navigate(['/productdetailes/' + pid ])
}

carts() {
  this.service.cart(this.sid).subscribe(
    res => {
      this.cart = res.rowCount;

    }
  )
}
logout() {
  localStorage.clear()
  this.router.navigate(['/user/login'])
}
}
