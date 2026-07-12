import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  standalone: false,
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchQuery: string): Product[] {
    if (!products || !searchQuery) {
      return products;
    }

    const searchQueryLowerCase = searchQuery.toLowerCase();

    return products.filter(product =>
      product.title?.toLowerCase().includes(searchQueryLowerCase) ||
      product.description?.toLowerCase().includes(searchQueryLowerCase)
    )
  }

}
