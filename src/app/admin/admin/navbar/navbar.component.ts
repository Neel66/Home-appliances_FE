import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.clear();
  this.router.navigate(['/admin/signin'])
}
// color(){
//   alert('hello');
//  const col = document.getElementById('ge');
//   function a(text:any){
//    text.style.color = "red"
//   }
//   a(col)
// //   document.body.style.color = 'red'
// }
}
