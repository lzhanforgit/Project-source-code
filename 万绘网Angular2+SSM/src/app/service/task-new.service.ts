import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class TaskNewService {
  constructor(
    private glo: GlobalPropertyService,
    private http: HttpClient
  ) { }

  public findAllTask(callback){
    this.http.get('http://localhost:8080/task/findAllTasks').subscribe(res=>{
      callback(res);
    },
      error => {
      console.log('null');
      callback(null);
      })
  }

}
