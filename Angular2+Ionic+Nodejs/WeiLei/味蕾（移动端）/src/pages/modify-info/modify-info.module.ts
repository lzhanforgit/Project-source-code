import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyInfoPage } from './modify-info';
// import {CityPickerModule} from "ionic2-city-picker";

@NgModule({
  declarations: [
    ModifyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyInfoPage)
  ],
})
export class ModifyInfoPageModule {}
