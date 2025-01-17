import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../admin/admin/signin/signin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router : Router, private service : SigninService){}
  canActivate(): boolean {
    if(this.service.checkUser()){
       return true;
    }
    else{
    this.router.navigate(['/admin/signin'])
    return false;
    }
  }
  
}
