import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { RoleGuardGuard } from './role-guard.guard';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
