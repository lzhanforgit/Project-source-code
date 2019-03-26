import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';
@Injectable()
@Injectable()
export class InfoServiceService {
  //url= 'http://47.94.165.179:3000/info';
  url= 'http://localhost:3000/info';
  constructor(
    private http: HttpClient,
  ) { }

  /*getProvinces(callback){
    this.http.get(this.url + '/provinces').subscribe(function(result){
      callback(result);
    });
  }*/


  getSocialUpdate(id): Promise<any>{
    const headers = new HttpHeaders({id: id+''});
    return this.http.get(this.url + '/social_update', {headers: headers}).toPromise().then( (result)=> {
      return result;
    });
  }


}
