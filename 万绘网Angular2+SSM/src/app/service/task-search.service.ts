import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class TaskSearchService {

  constructor(
    private glo: GlobalPropertyService,
    private http: HttpClient
  ) { }

  //查询所有任务
  public task(callback){
    this.http.get('http://127.0.0.1:8080/task/findAllTasks').subscribe(res=>{
      callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
  //查询任务
  public findAllTask(data,callback){
    this.http.post('http://127.0.0.1:8080/task/findConditionsTask',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //查询任务详情
  public taskDetail(data,callback){
    this.http.post('http://127.0.0.1:8080/task/findOneTask',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //查询发布者个人信息
  public findUserById(data,callback){
    this.http.post('http://127.0.0.1:8080/user/finaUserById',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //接受任务
  public acceptTask(data,callback){
    this.http.post('http://127.0.0.1:8080/taskGet/acceptTask',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //查询是否接受过此任务
  public selectTaskGet(data,callback){
    this.http.post('http://127.0.0.1:8080/taskGet/selectTaskGet',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //删除任务
  public delTask(data,callback){
    this.http.post('http://127.0.0.1:8080/task/deleteTask',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //查询接受这条任务的人数
  public findGetOrderNumber(data,callback){
    this.http.post('http://127.0.0.1:8080/taskGet/showTaskGetOrderNumber',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  //根据类型查询作品
  public findStyleById(data,callback){
    this.http.post('http://127.0.0.1:8080/submitPhoto/findPhotoByStyleId',data).subscribe(res=>{
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

}
