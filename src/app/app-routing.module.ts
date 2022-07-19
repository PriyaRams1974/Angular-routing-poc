import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './authguard/auth-guard.guard';
import { RoleGuardGuard } from './authguard/role-guard.guard';
import { ProductsComponent } from './products/products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeactivateGuardGuard } from './authguard/deactivate-guard.guard';
import { ChildGuardGuard } from './authguard/child-guard.guard';

const routes: Routes = [
{
  path:'',
  component: LoginComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuardGuard]
},
{
  path:'about',
  component:AboutComponent,
  canActivate:[AuthGuardGuard]
},
{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[RoleGuardGuard]
},
{
  path:'products',
  component:ProductsComponent,
  // canActivate:[AuthGuardGuard],
  canActivateChild:[ChildGuardGuard],
  children:[
    {
      path:'view-products',
      component:ViewProductsComponent, 
      canActivate:[RoleGuardGuard],      
    },
    {
      path:'add-products',
      component:AddProductsComponent,
      canDeactivate:[DeactivateGuardGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
