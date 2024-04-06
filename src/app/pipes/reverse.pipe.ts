import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let res: string = '';
    for (let i = 0; i < value.length; i++) {
      res = value[i] + res;
    }
    return res;
  }
}
