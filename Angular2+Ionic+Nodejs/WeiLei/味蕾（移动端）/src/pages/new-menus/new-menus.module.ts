import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMenusPage } from './new-menus';

@NgModule({
  declarations: [
    NewMenusPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMenusPage),
  ],
})
export class NewMenusPageModule {}
