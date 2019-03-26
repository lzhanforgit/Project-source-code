import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  url: any = 'http://172.17.0.9:3000/users';
  constructor(
    private http: HttpClient
  ) {

  }

  login(user , callback) {
    this.http.post(this.url + '/login', user).subscribe(
      function (result) {
        // console.log(result);
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }

    );
  }
  regist(user , callback) {
    this.http.post(this.url + '/regist', user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }

    );
  }
  text(user , callback) {
    this.http.post(this.url + '/work', user).subscribe(
      function (result) {
        // console.log(result);
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }

    );
  }

  editUser(){

  }

}
