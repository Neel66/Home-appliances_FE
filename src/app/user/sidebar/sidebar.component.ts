import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = true;
  @Input() mode: 'over' | 'push' | 'slide' = 'over';
  toggleSidebar(){
    this.opened = !this.opened;
    this.router.navigate(["/userhome"])
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear()
    this.router.navigate(['/user/login'])
  }
}
