import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productdetailes'
})
export class ProductdetailesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const query = args[0];
    if (typeof query === 'undefined')  return value ;
    return value.filter( (product: any) => { 
      return JSON.stringify(product).toUpperCase().indexOf(query.toUpperCase()) > -1 
    })
  }

}
