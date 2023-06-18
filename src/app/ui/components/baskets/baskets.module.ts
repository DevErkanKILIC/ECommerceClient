import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';
import { RouterModule } from '@angular/router';
import { parseHostBindings } from '@angular/compiler';



@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: BasketsComponent }
    ])
  ]
})
export class BasketsModule { }
