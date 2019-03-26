import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(
    private glo:GlobalPropertyService,
    private http:HttpClient
  ) { }

  public register(data,callback){
    this.http.post('http://127.0.0.1/lrc/register',data).subscribe(res=>{
      callback(res);
    },
      error=>{

      });
  }
}
