import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ECommerceClient';

  constructor() {
  }

  ngOnInit(): void {
  }
}

$.get("http://localhost:5153/api/Products", data => {
  console.log(data);
})