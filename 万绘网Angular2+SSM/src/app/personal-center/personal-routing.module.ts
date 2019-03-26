/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyTaskComponent } from '../personal-center/my-task/my-task.component';
import { MyLikeComponent } from '../personal-center/my-like/my-like.component';
import { MyCollectionComponent } from '../personal-center/my-collection/my-collection.component';
import { MyReleaseComponent } from '../personal-center/my-release/my-release.component';
import { PersonalCenterComponent } from "./personal-center.component";
import {AuthGuard} from '../service/auth_guard.service'


const routes: Routes = [

  {
    path: 'personal',

    component: PersonalCenterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'mytask',
        component: MyTaskComponent
      },
      {
        path: 'mycollection',
        component: MyCollectionComponent
      },
      {
        path: 'mylikes',
        component: MyLikeComponent
      },
      {
        path: 'myrelease',
        component: MyReleaseComponent,
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PersonalRoutingModule {}
