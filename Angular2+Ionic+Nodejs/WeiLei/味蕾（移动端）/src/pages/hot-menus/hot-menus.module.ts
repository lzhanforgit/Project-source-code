import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotMenusPage } from './hot-menus';

@NgModule({
  declarations: [
    HotMenusPage,
  ],
  imports: [
    IonicPageModule.forChild(HotMenusPage),
  ],
})
export class HotMenusPageModule {}
