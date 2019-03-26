import { Component, OnInit } from '@angular/core';


import {UsersService} from './../services/users.service';
import { LocalStorage } from './../services/localStorage.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {

  login_res: string;
  i: any;
  constructor(
    private userSer: UsersService,
    private router: Router,
    private localstorage: LocalStorage


  ) { }

  // _telephone='13812790421';
  // _password='1234567';

  ngOnInit() {
  }
  toLogin(loginForm) {
    let that = this;
    that.userSer.login(loginForm.form.value, function(result) {
      // console.log(result);
      if (result.stateCode === 1 ) {
          that.localstorage.set('token', result.token);
          that.localstorage.set('username', result.user_name);
          that.localstorage.set('userId', result.user_id);
          that.localstorage.set('telephone', result.user_telephone);
        // }else {
        //   that.localstorage.remove('token');
        //   that.localstorage.remove('username');
        //   that.localstorage.remove('userId');
        //   that.localstorage.remove('telephone');
          // that.sessionstorage.set('token', result.token);
          // that.sessionstorage.set('userId', result.userId);
        that.login_res = '';
        that.router.navigate(['/index']);
      }else if (result.stateCode == 2) {
        that.login_res = '密码错误';
        that.i = 1;
      }else if (result.stateCode == 3) {
        that.login_res = '用户不存在';
        that.i = 1;
      }else {
      }
    })
  }

}
