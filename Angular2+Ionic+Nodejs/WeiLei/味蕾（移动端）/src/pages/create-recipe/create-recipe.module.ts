import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRecipePage } from './create-recipe';

@NgModule({
  declarations: [
    CreateRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRecipePage),
  ],
})
export class CreateRecipePageModule {}
