import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: number): unknown {
    const stringifyNum = price.toString();
    if (stringifyNum.includes('.')) {
      const arr = stringifyNum.split('.');
      return `<span class="price-value">${arr[0]}.</span><span class="price-decimal">${arr[1]}</span>`;
    }
    return stringifyNum;
  }
}
