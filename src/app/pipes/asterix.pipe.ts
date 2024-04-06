import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix',
})
export class AsterixPipe implements PipeTransform {
  transform(ch: string): string {
    let T: any = ['a', 'e', 'i', 'o', 'u', 'y'];
    let result: string = '';
    for (let i = 0; i < ch.length; i++) {
      let inter = ch[i];
      for (let j = 0; j < T.length; j++) {
        if (inter.toLowerCase() == T[j]) {
          inter = "*";
          break;
        }
      } 
      result += inter;
    }
    return result;
  }
}
