import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserPipe'
})
export class SearchUserPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
    if(args){
      if(value){
        var new_user=value.filter(function (user,index) {
          // console.log(menu.name);
          if(user.name.indexOf(args) != -1) {
            return user;
          }
        });
      }
      return new_user;
    }
    else {
      return value;
    }
  }

}
