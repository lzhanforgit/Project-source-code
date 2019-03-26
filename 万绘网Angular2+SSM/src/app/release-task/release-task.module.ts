import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GlobalPropertyService } from "../service/global-property.service";
import { ReleaseTaskComponent } from "./release-task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { AddSuccessComponent } from "./add-success/add-success.component";
import {Input} from "@angular/compiler/src/core";

@NgModule({
  declarations: [
    AddTaskComponent,
    AddSuccessComponent,
    ReleaseTaskComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [GlobalPropertyService],
  bootstrap: [ReleaseTaskComponent]
})
export class ReleaseTaskModule { }
