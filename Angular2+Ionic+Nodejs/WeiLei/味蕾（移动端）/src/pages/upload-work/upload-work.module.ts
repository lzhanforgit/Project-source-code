import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadWorkPage } from './upload-work';

@NgModule({
  declarations: [
    UploadWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadWorkPage),
  ],
})
export class UploadWorkPageModule {}
