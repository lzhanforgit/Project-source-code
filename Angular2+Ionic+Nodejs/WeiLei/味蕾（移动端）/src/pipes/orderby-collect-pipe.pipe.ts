import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyCollectPipe'
})
export class OrderbyCollectPipePipe implements PipeTransform {

  transform(menu: any, args?: any): any {
    var new_menus = [];
    new_menus = menu;
    if(new_menus){
      new_menus.sort(function (a, b) {
        return b.collect_times - a.collect_times;
      });
    }
    // console.log(new_menus);
    return new_menus;
  }

}
