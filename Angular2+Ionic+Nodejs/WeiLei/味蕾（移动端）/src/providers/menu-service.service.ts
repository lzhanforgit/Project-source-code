import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuServiceService {
  url:string='http://localhost:3000/menu';

  // url= 'http://47.94.165.179:3000/menu';
  constructor(
    private http: HttpClient,
    // private storage:Storage
  ) {}
  searchMenus():Promise<any>{//搜索
    // console.log('service');
    return this.http.get(this.url + '/indexmenu').toPromise().then(result =>{
      return result;
    })
  }
  getIndexMenus():Promise<any> {
    return this.http.get(this.url + '/indexmenu').toPromise().then(result=>{
      return result;
    });
  }

  getIndexList():Promise<any>{
    return this.http.get(this.url + '/indexlist').toPromise().then(result=>{
      return result;
    });
  }
  getIndexMenu(callback) {
    this.http.get(this.url + '/indexmenu').subscribe(function(result){
      callback(result);
    });
  }

  getIndex(callback){
    this.http.get(this.url + '/indexlist').subscribe(function(result){
      callback(result);
    });
  }

  getclssify(callback){
    this.http.get(this.url + '/classes').subscribe(function(result){
      callback(result);
    });
  }
  getMenudetail(menuid):Promise<any>{
    let  headers = new HttpHeaders({id: menuid+''});
    return this.http.get(this.url+'/Menudetails', {headers: headers}).toPromise().then(result=>{
      return result;
    });
  }
  delRecipeFromMenu(recipeId,menuId):Promise<any>{
    return this.http.post(this.url + '/deleteRfromList', { 'recipe_id' : recipeId, 'list_id' : menuId }).toPromise().then((result)=>{
      return result;
    });
  }

}
