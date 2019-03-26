import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class ReleaseTaskService {

  constructor(
    private glo: GlobalPropertyService,
    private http: HttpClient
  ) { }

  public addTask(data,callback){
    this.http.post('http://127.0.0.1:8080/task/addTask',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }


}
