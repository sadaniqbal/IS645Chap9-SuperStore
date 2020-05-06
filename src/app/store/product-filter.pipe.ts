import { PipeTransform, Pipe } from "@angular/core";

import { Product } from "../model/product.model";

@Pipe({
  name: "productFilter",
  pure: false,
})
export class ProductFilterPipe implements PipeTransform {
  transform(product: Product[], searchTerm: string): Product[] {
    if (!product || !searchTerm) {
      return product;
    }

    return product.filter(
      (Product) =>
        Product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
