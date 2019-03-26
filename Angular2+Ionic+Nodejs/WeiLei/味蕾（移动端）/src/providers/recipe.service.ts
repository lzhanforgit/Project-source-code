import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {

  // url:string='http://10.40.4.3:3000/menu';
  // url:string='http://47.94.165.179:3000/menu';
  url:string='http://localhost:3000/menu';

  constructor(
    private http:HttpClient,
    private storage:Storage
  ) {
  }

  getDetails(id):Promise<any> {
    // console.log(id + '------------->Service');
    let headers = new HttpHeaders({ "id" : id+'' });
    // console.log(headers);
    return this.http.get(this.url + '/details', { headers: headers }).toPromise().then((data)=>{
      return data;
    })
  }

  getSteps(id):Promise<any> {
    // console.log(id + '------------->Service');
    let headers = new HttpHeaders({ "id" : id +''});
    // console.log(headers);
    return this.http.get(this.url + '/steps', { headers: headers }).toPromise().then((data)=>{
      return data;
    })
  }
  getMenuWorks(id):Promise<any>{
    let headers = new HttpHeaders({ "id" : id +''});
    return this.http.get(this.url + '/Menuworks', { headers: headers }).toPromise().then((data)=>{
      return data;
    })
  }

  getMenuLists(id):Promise<any>{
    let headers = new HttpHeaders({ "id" : id +''});
    return this.http.get(this.url + '/Menulists', { headers: headers }).toPromise().then((data)=>{
      return data;
    })
  }

  addMenu(recipeid, menuid):Promise<any>{
    return this.http.post(this.url+'/addRintoList',{'recipe_id': recipeid, 'list_id': menuid}).toPromise().then((data)=>{
      return data;
    })
  }
  delRfromL(recipeid, menuid):Promise<any>{
    return this.http.post(this.url+'/deleteRfromList',{'recipe_id': recipeid, 'list_id': menuid}).toPromise().then((data)=>{
      return data;
    })
  }

  getMenuDetails(id):Promise<any>{
    let headers = new HttpHeaders({ "id" : id +''});
    return this.http.get(this.url + '/Menudetails', { headers: headers }).toPromise().then((data)=>{
      return data;
    })
  }

  checkcollect(recipeid, userid):Promise<any>{
    return this.http.post(this.url+'/checkCollect',{'reciper_id': recipeid, 'user_id': userid}).toPromise().then((data)=>{
      return data;
    })
  }

  collectRecipe(recipeid, userid):Promise<any>{
    return this.http.post(this.url+'/collectReciper',{'reciper_id': recipeid, 'user_id': userid}).toPromise().then((data)=>{
      return data;
    })
  }

  uncollectRecipe(recipeid, userid):Promise<any>{
    return this.http.post(this.url+'/UncollectReciper',{'reciper_id': recipeid, 'user_id': userid}).toPromise().then((data)=>{
      return data;
    })
  }
  addList(formData):Promise<any> {
    return this.http.post(this.url + '/addList', formData).toPromise().then(result=>{
      return result;
    });
  }
  addPersonalWorks(formData):Promise<any>{
    return this.http.post(this.url+'/addPersonalWork',formData).toPromise().then((data)=>{
      return data;
    })
  }
}

