import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballScaleMultiple);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
      }
    });

    // this.httpClientService.put({
    //   controller: "products"
    // },
    //   {
    //     id: "8E1F0E0C-0726-407E-B6A9-08DB74C6AF88",
    //     name: "Kurşun Kalem",
    //     stock: 70,
    //     price: 15
    //   }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, {
    //   id: "DA2CB791-3711-47A5-B356-ECE8C2B7683B"
    // }).subscribe();


    // this.httpClientService.get({
    //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts",
    // }).subscribe(data => console.log(data));
  }
}
