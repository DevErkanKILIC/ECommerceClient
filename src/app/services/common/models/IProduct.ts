import { Create_Product } from "src/app/contracts/product/create_product";

export interface IProduct {
    read(page: number, size: number, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void);
    create(product: Create_Product, successCallBack?: any);
    update(product: Create_Product);
    delete(id: string);
}
