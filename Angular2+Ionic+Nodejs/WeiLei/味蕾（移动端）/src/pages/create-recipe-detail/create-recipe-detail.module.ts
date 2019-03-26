import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRecipeDetailPage } from './create-recipe-detail';

@NgModule({
  declarations: [
    CreateRecipeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRecipeDetailPage),
  ],
})
export class CreateRecipeDetailPageModule {}
