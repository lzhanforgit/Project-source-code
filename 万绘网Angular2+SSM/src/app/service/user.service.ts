import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

///////////////////////////////////////////////////////////////////////////////////////////
  /*查找用户*/

  public finduser(data,callback){
    this.http.post('http://127.0.0.1:8080/user/finaUser.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

///////////////////////////////////////////////////////////////////////////////////////////

  /*修改个人信息*/

  public upuser(data,callback){
    this.http.post('http://127.0.0.1:8080/user/updataUser.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

///////////////////////////////////////////////////////////////////////////////////////////
  /*查找关注*/
  public findfollow(data,callback){
    this.http.post('http://127.0.0.1:8080/relationship/findRelationshipfollow.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
  /*删除关注*/
  public removeFollow(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/addRelationship.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }


///////////////////////////////////////////////////////////////////////////////////////////

  /*查找粉丝*/
  public findfan(data,callback){
    this.http.post('http://127.0.0.1:8080/relationship/findRelationshipFans.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*删除关注*/
  public removeFan(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/addRelationship.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

///////////////////////////////////////////////////////////////////////////////////////////

  /*查找评论*/
  public findComment(data,callback){
    this.http.post('http://127.0.0.1:8080/user/findComment.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

///////////////////////////////////////////////////////////////////////////////////////////

  /*查找投稿*/
  public findWork(data,callback){
    this.http.post('http://127.0.0.1:8080/photofind/findPhoto.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*删除投稿*/
  public removeWork(data,callback){
    this.http.post('http://127.0.0.1:8080/photofind/deletePhoto.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
///////////////////////////////////////////////////////////////////////////////////////////

  /*查找收藏*/
  public findCollction(data,callback){
    this.http.post('http://127.0.0.1:8080/collect/findPhoto.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*删除收藏*/
  public removeCollection(data,callback){
    this.http.post('http://127.0.0.1:8080/collect/delectCollect.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  /*添加收藏*/

  public addCollection(data,callback){
    this.http.post('http://127.0.0.1:8080/collect/addCollection.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
///////////////////////////////////////////////////////////////////////////////////////////

  /*修改密码*/
  public uppwd1(data,callback){
    this.http.post('http://127.0.0.1:8080/user/updatePassword.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
  /*修改密码*/
  public uppwd(data,callback){
    this.http.post('http://127.0.0.1:8080/user/updataUser.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
///////////////////////////////////////////////////////////////////////////////////////////

  /*欢迎*/
  public welcome(data,callback){
    this.http.post('http://127.0.0.1:8080/user/finaUser.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
///////////////////////////////////////////////////////////////////////////////////////////

  /*查找地址*/

  public findaddress(data,callback){
    this.http.post('http://127.0.0.1:8080/user/findAddress.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  public upaddress(data,callback){
    this.http.post('http://127.0.0.1:8080/user/updateAddress.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
/*增加粉丝*/
  public like(data,callback){
    this.http.post('http://127.0.0.1:8080/photo/addRelationship.do',data).subscribe(function (res) {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

}
