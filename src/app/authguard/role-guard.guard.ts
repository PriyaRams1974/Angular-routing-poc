import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private route:Router) { }
  canActivate(){
    let role : any = this.authService.getRole()
    console.log("getRole",role)
    if(role == 'admin'){
      return true;
    }
      this.route.navigate(['/'])
      return false;
  
}
  
}
