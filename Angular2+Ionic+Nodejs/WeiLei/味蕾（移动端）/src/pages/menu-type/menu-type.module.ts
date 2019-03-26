import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTypePage } from './menu-type';

@NgModule({
  declarations: [
    MenuTypePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTypePage),
  ],
})
export class MenuTypePageModule {}
