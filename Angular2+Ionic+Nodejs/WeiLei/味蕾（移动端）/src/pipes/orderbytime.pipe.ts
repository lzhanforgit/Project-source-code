import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderbytime'
})
export class OrderbytimePipe implements PipeTransform {
  new_menus:any;


  transform(menus: any, args?: any): any {
    this.new_menus=menus;
    if(this.new_menus){
      this.new_menus.sort(function (a, b) {
        // console.log(this.new_menus);
        return Date.parse(b.create_time) - Date.parse(a.create_time);

      });
    }

    return this.new_menus;
  }
}
