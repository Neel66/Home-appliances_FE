import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailesslice'
})
export class DetailesslicePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return (value.length > length ) ? value.slice(0,31) + '...' : value;
  }

}
