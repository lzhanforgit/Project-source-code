import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class TaskSubmitService {

  constructor(
    private glo: GlobalPropertyService,
    private http: HttpClient
  ) { }

  public submitTask(data,callback){
    this.http.post('http://127.0.0.1:8080/task/addTaskSubmit',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  public findSubmitTask(data,callback) {
    this.http.post('http://127.0.0.1:8080/task/findSearchSubmitTask', data).subscribe(res => {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
