import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pname: any = [];
  cname: any = [];
  cart: any;
  userdata: any
  prname: any;
  cid: any
  sid: any;
  coname: any
  search: any
  query: any;
  tokan : any;

  constructor(private service: NavbarService,
    private router: Router) {
    this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}')
    this.tokan = jwtDecode(this.userdata)
    this.sid = this.tokan.id
  }

  ngOnInit(): void {
    this.productname()
    this.productcompany();
  
    this.carts();
    console.log(this.sid)
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
  productname() {
    return this.service.productname()
      .subscribe((res) => {
        this.pname = res.rows
      })
  }

  productcompany() {
    return this.service.productcompany()
      .subscribe((res) => {

        this.cname = res.rows
      })
  }
 async onSelect() {
    //console.log(this.prname)
    localStorage.setItem('productname', JSON.stringify(this.prname));
   //await this.router.navigate(['/categoryfilter'])
  }
  onCompany() {
    localStorage.setItem('companyname', JSON.stringify(this.coname))
  }
  category() {
    if (this.prname === undefined) {
      alert('please select productname')
    }
    else {
      this.router.navigate(['/categoryfilter'])
    }
  }
  company() {
    if (this.coname === undefined) {
      alert('please select productname')
    }
    else {
      this.router.navigate(['/companyfilter'])
    }
  }
}
