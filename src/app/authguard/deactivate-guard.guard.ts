import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductsComponent } from '../add-products/add-products.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: AddProductsComponent,
  ){
    if(component.userForm.dirty){
      return window.confirm("Your changes will be lost. Are you sure you want to leave?")
    }
    return true;
  }
  
}
