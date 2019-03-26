import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOrRegisterPage } from './login-or-register';

@NgModule({
  declarations: [
    LoginOrRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOrRegisterPage),
  ],
})
export class LoginOrRegisterPageModule {}
