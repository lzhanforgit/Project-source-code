import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserRegistService {

  constructor(
    private http: HttpClient
  ) { }
  public validate(callback){
    this.http.get('http://localhost:8080/lrc/validateCode').subscribe(res=>{
        console.log(res);
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  public regist(data,callback){
    this.http.get('http://localhost:8080/lrc/register',data).subscribe(res=>{
        console.log(res);
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
