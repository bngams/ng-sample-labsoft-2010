import { Pipe, PipeTransform } from '@angular/core';

/*
 * add VAT value
 * Takes an exponent argument that defaults to 20
 * Usage:
 *   value | vat:rate
 * Example:
 *   {{ 10 | vat:20 }}
 *   formats to TTC : 12
*/
@Pipe({
  name: 'vat'
})
export class VATPipe implements PipeTransform {

  transform(value: number, rate: number): unknown {
    return value + (value * rate / 100);
  }

}
