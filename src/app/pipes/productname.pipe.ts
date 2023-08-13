import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productname'
})
export class ProductnamePipe implements PipeTransform {
  
  
  transform(value: any, ...args: any[]): any {
    const query = args[0];
    if (typeof query === 'undefined')  return value ;
    return value.filter( (product: any) => { 
       return product.name.toUpperCase().indexOf(query.toUpperCase()) > -1 
    })
  }

  

}
