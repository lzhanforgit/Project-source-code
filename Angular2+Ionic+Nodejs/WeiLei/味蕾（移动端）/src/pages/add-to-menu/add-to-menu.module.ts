import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToMenuPage } from './add-to-menu';

@NgModule({
  declarations: [
    AddToMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToMenuPage),
  ],
})
export class AddToMenuPageModule {}
