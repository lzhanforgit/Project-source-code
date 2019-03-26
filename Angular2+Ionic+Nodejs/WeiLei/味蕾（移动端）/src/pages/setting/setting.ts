import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage} from '../login/login';
import {LoginOrRegisterPage} from "../login-or-register/login-or-register";
import {ModifyInfoPage} from "../modify-info/modify-info";
import { ModifyPasswordPage } from '../modify-password/modify-password';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private storage:Storage,
    public modalCtrl: ModalController,

  ) {
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad SettingPage');
  }
  back(){
    this.navCtrl.pop();
  }
  toChangePassword(){
    const modelPage = this.modalCtrl.create(ModifyPasswordPage);
    modelPage.present();
  }
  login_out(){
      this.storage.ready().then(()=>{
        this.storage.remove('isLogin');
        this.storage.remove('userId');
        this.storage.remove('token');
      });
      this.viewCtrl.dismiss();
      this.navCtrl.push(LoginOrRegisterPage)
  }
}
