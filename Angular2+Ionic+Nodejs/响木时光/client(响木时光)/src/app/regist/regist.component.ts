import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../services/localStorage.service';
import { GlobalPropertyService } from './../services/global-property.service';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  providers: [UsersService]
})
export class RegistComponent implements OnInit {
  regist_res: string;
  constructor(
  private userSer: UsersService,
  private router: Router,
  private glo: GlobalPropertyService,
  private localstorage: LocalStorage
  ) { }

  ngOnInit() {
  }
  toRegist(regist_form) {
    let that = this;
    that. userSer .regist( regist_form.form.value, function (result) {
      // alert(result.stateCode);
      if (result && result.stateCode == 1) {
        // alert('注册成功');
        // 存储token到本地
        that.localstorage.set('username', result.username);
        // that.localstorage.set('userId', result.user_id);
        that.localstorage.set('telephone', result.telephone);
        // console.log('开始跳转首页');
        that.router.navigate(['/index']);
        location.reload();
      }if (result && result.stateCode == 5) {
        console.log(result);
        that.regist_res =  '用户已存在';
      }else {
        if (result && result.stateCode == 'e004') {
          // that.router.navigate(['/cannot_find']);
        }
      }
    });
  }
}
