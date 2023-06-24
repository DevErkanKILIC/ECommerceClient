import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';


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
export class DashboardModule extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballSpinClockwiseFadeRotating);
  }
}
