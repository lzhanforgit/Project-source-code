import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable()
export class RankingService {

  constructor(
    private http:HttpClient
  ) { }

  /*需要数据：作品图片、作品标题、作者昵称、收藏数、点赞数*/
  /*查询排行榜周榜图片信息：作品图片、作品标题、点赞数*/
  public findPhotoRankWeek(data,callback){
    this.http.post('http://127.0.0.1:8080/rank/findPhotoRankWeek.do',data).subscribe(res=> {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
  /*查询排行榜月榜图片信息：作品、作者昵称、作品标题*/
  public findPhotoRankMonth(data,callback){
    this.http.post('http://127.0.0.1:8080/rank/findPhotoRankMonth.do',data).subscribe(res=> {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
  /*查询排行榜新人榜图片信息：作品、作者昵称、作品标题*/
  public findPhotoRankDate(data,callback){
    this.http.post('http://127.0.0.1:8080/rank/findPhotoRankDate.do',data).subscribe(res=> {
        callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }
}
