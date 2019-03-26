import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyTimePipe'
})
export class OrderbyTimePipePipe implements PipeTransform {

  transform(menu: any, args?: any): any {
    var new_menus = new Array();
    new_menus = menu;
    if (new_menus) {
      new_menus.sort(function (a, b) {
        return Date.parse(b.create_time) - Date.parse(a.create_time);
      });
    }
   // console.log(new_menus);
    return new_menus;
  }

}
