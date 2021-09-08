import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Product';

@Pipe({
  name: 'sortByPriceProducts'
})
export class SortByPriceProducts implements PipeTransform {

  transform(value: any) {

    if (value.length === 0) {
      return value;
    }
    // const tempArray=value.sort((a:any, b:any) => a.price.localeCompare(b.price));
    const tempArray=value.sort((a:Product, b:Product) => a.price < b.price ? -1 : a.price > b.price ? 1 : 0)
    return tempArray;
  }

}
