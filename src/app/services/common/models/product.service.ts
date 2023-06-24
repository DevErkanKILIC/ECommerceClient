import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/product/create_product';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProduct {

  constructor(private alertify: AlertifyService, private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: any) {
    this.httpClientService.post({
      controller: "products"
    }, product).subscribe(result => {
      successCallBack();
      this.alertify.message("Successfully created", {
        messageType: MessageType.Success,
        position: Position.BottomRight,
        dismissOthers:true
      })
    });

  }
  update(product: Create_Product) {
    throw new Error('Method not implemented.');
  }
  delete(product: Create_Product) {
    throw new Error('Method not implemented.');
  }

}
