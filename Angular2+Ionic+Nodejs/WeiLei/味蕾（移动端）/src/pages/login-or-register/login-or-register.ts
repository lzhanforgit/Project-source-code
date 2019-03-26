import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginOrRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-or-register',
  templateUrl: 'login-or-register.html',
})
export class LoginOrRegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController,
    public viewCtrl: ViewController
  ) {
  }
  toLogin(){
    const modelPage=this.modalCtrl.create(LoginPage);
    modelPage.present();
  }
  toRegister(){
    const modelPage=this.modalCtrl.create(RegisterPage);
    modelPage.present();
  }

  toHomepage(){

    this.navCtrl.push(TabsPage);
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOrRegisterPage');
  }

}
