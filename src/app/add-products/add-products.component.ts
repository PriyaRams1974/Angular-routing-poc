import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  userForm : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'password': new FormControl('')
    })
  }
}
