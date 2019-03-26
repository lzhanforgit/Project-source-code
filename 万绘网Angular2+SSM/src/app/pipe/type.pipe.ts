import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
  pure:false
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if(value){
    //   return value.length<10?value:value.substr(0,10)+'...'
    // }

    return value;
  }

}
