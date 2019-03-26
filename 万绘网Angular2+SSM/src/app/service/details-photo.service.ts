import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DetailsPhotoService {

  constructor(
    private http: HttpClient
  ) { }

  /*获取评论*/
  public findAllComment(data,callback){

    this.http.post('http://127.0.0.1:8080/comment/findAllComment',data).subscribe(res=> {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*添加评论*/
  public addComment1(data,callback){

    this.http.post('http://127.0.0.1:8080/comment/addComment1',data).subscribe(res=> {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*获取作品*/
  public findAllByUserId(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/findAllByUserId',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*查看是否点赞*/
  public findLikePhoto(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/findLikePhoto',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*取消点赞*/
  public deleteLikePhoto(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/deleteLikePhoto',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*点赞*/
  public addLikePhoto(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/addLikePhoto',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*查看关注*/
  public findRelationship(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/findRelationship',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*关注*/
  public addRelationship(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/addRelationship',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*取消关注*/
  public deleteRelationship(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/deleteRelationship',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*发表作品接口，跳转到图片详情页*/
  /*发表作品*/
  public submitPhoto(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/submitPhoto',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*根据作品id查看到作品信息*/
  public findPhotoById(data):Promise<any>{
    return this.http.post('http://127.0.0.1:8080/photo/findPhotoById',data).toPromise().then(response=>response);
  }

  /*最新发布作品*/
  public findAllByTime(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/findAllByTime.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
