import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotMenuPage } from './hot-menu';

@NgModule({
  declarations: [
    HotMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(HotMenuPage),
  ],
})
export class HotMenuPageModule {}
