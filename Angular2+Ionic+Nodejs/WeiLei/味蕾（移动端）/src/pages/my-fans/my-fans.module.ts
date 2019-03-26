import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFansPage } from './my-fans';

@NgModule({
  declarations: [
    MyFansPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFansPage),
  ],
})
export class MyFansPageModule {}
