import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailPage } from './recipe-detail';

@NgModule({
  declarations: [
    RecipeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailPage),
  ],
})
export class RecipeDetailPageModule {}
