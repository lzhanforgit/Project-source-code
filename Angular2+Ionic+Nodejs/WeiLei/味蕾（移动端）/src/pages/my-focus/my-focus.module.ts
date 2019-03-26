import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFocusPage } from './my-focus';

@NgModule({
  declarations: [
    MyFocusPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFocusPage),
  ],
})
export class MyFocusPageModule {}
