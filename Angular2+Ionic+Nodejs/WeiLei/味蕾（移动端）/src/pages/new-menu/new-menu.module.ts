import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMenuPage } from './new-menu';

@NgModule({
  declarations: [
    NewMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMenuPage),
  ],
})
export class NewMenuPageModule {}
