import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserRegistService {

  constructor(private http: HttpClient) { }

  public register(data,callback){
    this.http.post('http://127.0.0.1:8080/lrc/register',data).subscribe(res=>{
        console.log(res);
        callback(res);
      },
      error => {

      })
  }
}
