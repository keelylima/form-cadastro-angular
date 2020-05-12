import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForm'
})
export class FilterFormPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return console.log(values);
  }

}
