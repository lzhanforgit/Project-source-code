import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController,App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersService]
})
export class LoginPage {
  loginForm: FormGroup;
  username: any;
  password: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private appCtrl: App,
    private storage:Storage,
    private userSer:UsersService,
    private formBuilder: FormBuilder
  ) {
        this.loginForm = formBuilder.group({
          userId: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
          userPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
        this.username = this.loginForm.controls['userId'];
        this.password = this.loginForm.controls['userPassword'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(user) {
    console.log(user);
      this.userSer.login(user).then((result)=> {
        console.log(result);
        if(result){
          if(result.stageCode==1){
            this.storage.ready().then(()=>{
              this.storage.set('isLogin',true);
              this.storage.set('userId',result.Id);
              this.storage.set('token',result.token);
            });
            this.navCtrl.push(TabsPage);
          }else {
            let toast = this.toastCtrl.create({
              message: '用户名或密码错误',
              duration: 3000
            });
            toast.present();
          }
        }else{
          let toast = this.toastCtrl.create({
            message: '服务器异常',
            duration: 3000
          });
          toast.present();
        }
      })
    }
  back(){
    this.viewCtrl.dismiss();
  }
  toRegister(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(RegisterPage);
  }
    // this.userSer.getAllUsers().then((data) => {
    //   console.log(data)
    // })
}
