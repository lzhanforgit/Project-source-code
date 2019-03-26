import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbycollect'
})
export class OrderbycollectPipe implements PipeTransform {
  new_menus: any;
  transform(menus: any, args?: any): any {
    this.new_menus = menus;
    if (this.new_menus) {
      this.new_menus.sort(function (a, b) {
        return b.collect_times - a.collect_times;
      });
    }
   // console.log(this.new_menus);
    return this.new_menus;
  }
}
