import { Component, OnInit } from '@angular/core';
import {BackService} from './../services/back.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorage } from '../services/local-storage.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers: [BackService ]
})
export class AdminloginComponent implements OnInit {

  login_res: string;
  _admin:any;
  _password:any;
  constructor(
    private back: BackService,
    private router: Router,
    private glo: GlobalPropertyService,
    private localstorage: LocalStorage
  ) { }

  ngOnInit() {
    if(this.localstorage.get('admin')){
      this._admin=this.localstorage.get('admin');
      this._password=this.localstorage.get('password');
    }
    this.glo.hiddenNavs = true;
    if (sessionStorage.getItem('name')) {
      this.router.navigate(['/admin']);
    }
  }

// 单例  单一的实例
  toLogin(login_form){
    const that = this;
    if($('#checkbox1').is(':checked')){
     that.localstorage.set('admin',that._admin);
     that.localstorage.set('password',that._password);
     }else{
     that.localstorage.remove('admin');
     that.localstorage.remove('password');
     }
    that.back.adminLogin(login_form.form.value, function (result) {
      if (result.stageCode == 1) {
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('name', result.Name);
        that.localstorage.set('token', result.token);
        that.router.navigate(['/admin']);
      }else {
        that.login_res = '用户名或密码错误';
      }
    });
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
}
