import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  /**
   * 
   * @param value 
   * @param subStr 
   * @returns 
   */
  transform(value: any, subStr: string) {
    if (value.length === 0) {
      return value;
    }
    const tempArray = [];
    for (const item of value) {
      let tempStr = item.title.toLowerCase();
      let tempStr2 = subStr.toLowerCase();
      if ((tempStr.includes(tempStr2)) == true) {
        tempArray.push(item);
      }
    }
    return tempArray;
  }
}
