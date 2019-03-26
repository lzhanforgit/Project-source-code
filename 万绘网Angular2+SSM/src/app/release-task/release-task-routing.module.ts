
import { NgModule } from '@angular/core';
/*路由*/
import { RouterModule, Routes } from '@angular/router';

import { ReleaseTaskComponent } from "./release-task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { AddSuccessComponent } from "./add-success/add-success.component";

const routes: Routes = [
  {
    path: 'realeaseTask',
    component: ReleaseTaskComponent,
    children: [
      {
        path: 'addTask',
        component: AddTaskComponent
      },
      {
        path: 'addSuccess',
        component: AddSuccessComponent
      }
    ]
  }
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  //
  // }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ReleaseTaskRoutingModule {}
