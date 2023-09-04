import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/product/create_product';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { IProduct } from './IProduct';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ListProduct } from 'src/app/contracts/product/list_product';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProduct {

  constructor(private alertify: AlertifyService, private httpClientService: HttpClientService) { }

  async read(page: number = 0, size: number = 5, successCallBack: () => void, errorCallBack: (errorMessage: string) => void): Promise<{ totalCount: number, products: ListProduct[] }> {
    const promiseData: Promise<{ totalCount: number, products: ListProduct[] }> = this.httpClientService.get<{ totalCount: number, products: ListProduct[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}`
    }).toPromise();
    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  create(product: Create_Product, successCallBack?: any) {
    this.httpClientService.post({
      controller: "products"
    }, product).subscribe(result => {
      successCallBack();
      this.alertify.message("Successfully created", {
        messageType: MessageType.Success,
        position: Position.BottomRight,
        dismissOthers: true
      })
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((val, index) => {
        val.value.forEach((_v, _index) => {
          message += `${_v}<br>`
        });
      });
      this.alertify.message(message, {
        messageType: MessageType.Error,
        position: Position.BottomRight,
        dismissOthers: true
      })
      successCallBack();
    });
  }
  update(product: Create_Product) {
    throw new Error('Method not implemented.');
  }
  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "products"
    }, { id });

    await firstValueFrom(deleteObservable);
  }

}
