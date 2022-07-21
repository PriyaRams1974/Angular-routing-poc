import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private ActivatedRoute: ActivatedRoute) { }
  products: any;
  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.data);
    this.getData();
  }
  getData(){
    this.products = this.ActivatedRoute.snapshot.data;
    console.log(this.products);
  }

}
