import { Component, OnInit } from '@angular/core';
import { UserLoginService} from "../../service/user-login.service";
import {ActivatedRoute, Router} from '@angular/router'; //导入router服务
import { GlobalPropertyService} from "../../service/global-property.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserLoginService]
})
export class LoginComponent implements OnInit {
  alias:string;//绑定验证码
  hint_Info:string;//绑定登录事件返回信息
  userPhone:string;
  userPassword:string;
  valiCode: any;
  data = new FormData();
  showLoading = false;
  constructor(
    private glo:GlobalPropertyService,
    private login:UserLoginService,
    private router: Router,
    private ar: ActivatedRoute
  ) {
    this.validateCode();
  }

  ngOnInit() {
    this.userPhone = localStorage.getItem('tel');
    this.userPassword = localStorage.getItem('pwd');
  }
  //验证码
  validateCode(){
    this.login.validate(res=>{
      sessionStorage.setItem('validateCode',res.result);
      this.alias = res.result;
    })
  }
  //登录事件
  user_login(){
    //准备数据

    this.data.set('userPhone',this.userPhone);
    this.data.set('userPassword',this.userPassword);

    //调用登陆方法
    this.login.login(this.data,res=> {
      let rscd = res.resultCode;
      res = res.user;
      if(!(this.valiCode == sessionStorage.getItem('validateCode'))){
        rscd = 908;
      }
      //登陆成功
      if(rscd === 901) {
        // let ckbox = document.getElementById("ckbox");
          localStorage.setItem('pwd',this.userPassword);
        //设置状态
        let url=this.ar.snapshot.paramMap.get('target');
        this.glo.isLogin = true;

        // this.userPhone = Md5.hashStr(this.userPhone);
        localStorage.setItem('tel',this.userPhone);
        localStorage.setItem('UD',res.userId);
        localStorage.setItem('avatar',res.userAvatar);
        localStorage.setItem('nn',res.userNikeName);
        document.cookie = 'tel='+this.userPhone;
        //设置转跳
        if(url){
          this.router.navigateByUrl(url);
        }else {
          this.router.navigateByUrl("index");
        }
        this.showLoading = false;
      }else if(rscd === 908){
        this.showLoading = false;
        this.hint_Info = '验证码错误';
        this.validateCode();
      }else{
        this.showLoading = false;
        this.hint_Info = '输入信息不正确';
        this.validateCode();
      }
    })
  }

  login_telOnclick = function(){
    this.hint_Info = '';
  }
  login_pwdOnclick = function(){
    this.hint_Info = '';
  }
  login_aliasOnclick = function(){
    this.hint_Info = '';
  }

}
