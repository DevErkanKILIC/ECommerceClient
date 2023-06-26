import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/product/create_product';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private alertify: AlertifyService, private productService: ProductService) {
    super(spinner);
  }

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.ballAtom);

    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    if (!name.value) {
      this.alertify.message("Lütfen ürün adını giriniz", {
        messageType: MessageType.Error,
        dismissOthers: true
      });
      this.hideSpinner(SpinnerType.ballAtom);
      return;
    }

    if (parseInt(stock.value) < 0) {
      this.alertify.message("Stok bilgisi 0'ın altında olamaz", {
        messageType: MessageType.Error,
        dismissOthers: true
      });
      this.hideSpinner(SpinnerType.ballAtom);
      return;
    }

    if (parseFloat(price.value) < 0) {
      this.alertify.message("Tutar bilgisi 0'ın altında olamaz", {
        messageType: MessageType.Error,
        dismissOthers: true
      });
      this.hideSpinner(SpinnerType.ballAtom);
      return;
    }
    this.productService.create(create_product, () => this.createdProduct.emit(create_product));
  }

}
