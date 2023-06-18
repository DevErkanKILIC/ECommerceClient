import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: DashboardComponent }
    ])
  ]
})
export class DashboardModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}
