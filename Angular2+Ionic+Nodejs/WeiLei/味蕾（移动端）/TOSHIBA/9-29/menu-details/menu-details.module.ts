import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuDetailsComponent} from './menu-details.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RefertoDoComponent } from './referto-do/referto-do.component';
import { MenuAddedComponent } from './menu-added/menu-added.component';

@NgModule({
  declarations: [
    MenuDetailsComponent,
    RecipeDetailsComponent,
    RefertoDoComponent,
    MenuAddedComponent
  ],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [MenuDetailsComponent]
})
export class MenuDetailsModule { }
