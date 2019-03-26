import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { LoginOrRegisterPage } from '../pages/login-or-register/login-or-register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage:Storage) {
    platform.ready().then(() => {

      this.storage.ready().then(() => {
        this.storage.get('isLogin').then((val) => {
          console.log(val);
          if(val){
            this.rootPage=TabsPage;
          }else{
            this.rootPage = LoginOrRegisterPage;
          }
        })
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
