import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRecipe',
})
export class SearchRecipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(args){
        if(value){
          var new_recipe=value.filter(function (menu,index) {
            // console.log(menu.name);
            if(menu.name.indexOf(args)!=-1){
              return menu;
            }
          });
        }
        return new_recipe;
      }
      else {
        return value;
      }
  }

}
