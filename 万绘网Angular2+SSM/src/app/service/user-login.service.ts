import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserLoginService {

  constructor(
    private http: HttpClient
  ) {}

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

  public login(data,callback){
    this.http.post('http://localhost:8080/lrc/userLogin',data).subscribe(res=>{
        console.log("=========="+res);
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
