import { Create_Product } from "src/app/contracts/product/create_product";

export interface IProduct {
    create(product: Create_Product,successCallBack?:any);
    update(product: Create_Product);
    delete(product: Create_Product);
}
