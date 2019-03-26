import { Injectable } from '@angular/core';
import {GlobalPropertyService} from "./global-property.service";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class PhotoNewService {

  constructor(
    private glo: GlobalPropertyService,
    private http: HttpClient
  ) { }

  public findNewPhoto(data,callback){
    this.http.post('http://127.0.0.1:8080/rank/findPhotoRankWeek',data).subscribe(function (res) {
      // console.log(res.photoList)
      callback(res);
      },
      error => {
        console.log('null');
        callback(null);
      })
  }

}
