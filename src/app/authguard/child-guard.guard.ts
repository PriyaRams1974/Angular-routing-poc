import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuardGuard implements CanActivateChild {
  constructor(private authservice : AuthServiceService){}
  canActivateChild() {

    let role = this.authservice.getRole()
    if(role == 'admin'){
      return true;
    }
    alert("Need admin rights")
    return false;
  }
  
}