import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinnerWithTimeout(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);
    setTimeout(() => this.hideSpinner(spinnerNameType), 500);
  }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  ballSpinClockwiseFadeRotating = "ball-spin-clockwise-fade-rotating",
  ballAtom = "ball-atom",
  ballScaleMultiple = "ball-scale-multiple"
}
