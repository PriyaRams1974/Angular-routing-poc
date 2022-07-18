import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   token : any = 'tokenAny';
   role : any = 'admin';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log("token",this.token);
    console.log("role",this.role);
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.role);
    this.router.navigate(['/home']);
  }
}
