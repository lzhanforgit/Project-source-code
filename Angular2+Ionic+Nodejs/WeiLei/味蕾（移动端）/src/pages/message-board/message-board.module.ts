import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageBoardPage } from './message-board';

@NgModule({
  declarations: [
    MessageBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageBoardPage),
  ],
})
export class MessageBoardPageModule {}
