import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DrawerService {

  constructor(
    private http: HttpClient
  ) { }


  public findAllDrawerInfo(callback){
    this.http.get('http://localhost:8080/painter/findAllInfo.do').subscribe(res=>{
        console.log(res);
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
