import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController,App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { LoginPage } from '../login/login';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm: FormGroup;
  iTime= 59;
  private timer;
  flag: any= false;
  code_mes: any= '获取验证码' ;
  username: any;
  password: any;
  num:any;
  code_res:any='';
  code:any;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              private appCtrl: App,
              private storage:Storage,
              private userSer:UsersService,
              private formBuilder: FormBuilder
  ) {

    this.registerForm = formBuilder.group({
      userId: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      code: ['']
    });
    this.username = this.registerForm.controls['userId'];
    this.password = this.registerForm.controls['userPassword'];
    this.code = this.registerForm.controls['code'];
  }

  regist(user){
    if (this.num != user.code) {
      let toast = this.toastCtrl.create({
        message: '验证码错误',
        duration: 3000
      });
      toast.present();
    } else {
      //const that = this;
      this.userSer.register(user).then(result=>{
        if (result.stageCode == '2') {
          let toast = this.toastCtrl.create({
            message: '发生错误了',
            duration: 3000
          });
          toast.present();
        } else if (result.stageCode == '1') {
         /* sessionStorage.setItem('ID', result.Id);
          sessionStorage.setItem('UserIcon', that.glo.user_icon);
          sessionStorage.setItem('token', result.token);
          that.localstorage.set('token', result.token);
          that.router.navigate(['/index']);
          that.reg_res = '';*/
          this.storage.ready().then(()=>{
            this.storage.set('isLogin',true);
            this.storage.set('userId',result.Id);
            this.storage.set('UserIcon','http://owkq4s9d1.bkt.clouddn.com/1506739929302.jpeg');
            this.storage.set('token',result.token);
            clearInterval(this.timer);
          });
          this.navCtrl.push(TabsPage);
        } else {
          let toast = this.toastCtrl.create({
            message: '数据库错误！',
            duration: 3000
          });
          toast.present();
        }
      })
    }
  }

  getCode(user){
    console.log(user);
    this.userSer.getCodeByphone(user).then(result=>{
      //console.log(result+"111111dad");
      if (result.stageCode == '1') {
        this.code_res = ' 该手机号已经注册过 ';
        console.log(this.code_res);
      }else if (result.stageCode == 'e004'){
        this.code_res = '数据库错误！';
       // console.log(this.code_res);
      }else{
        if (result){
          this.flag = true;
        //  console.log(result);
          this.num = result.stageCode;
          this.code_res = '';
          console.log(this.num);
          this.RemainTime();
        }
      }
    });
  }

  RemainTime(){
    this.timer = setInterval(() => {
      this.code_mes = this.iTime + '秒后重新获取';
      this.iTime--;
      console.log(this.flag);
      if (this.iTime < 0){
        clearInterval(this.timer);
        this.flag=false;
        this.code_mes='获取验证码'
      }
    }, 1000);
  }

  back(){
    this.viewCtrl.dismiss();
  }
  toLogin(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
