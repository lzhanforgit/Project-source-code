import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { WorkComponent } from './work/work.component';
import {SchoolComponent} from './school/school.component';
import {CommunityComponent} from './community/community.component';
import {CompanyComponent} from './company/company.component';
import {GuitarComponent} from './guitar/guitar.component';
import {PenComponent} from './pen/pen.component';
import {HairpinComponent} from './hairpin/hairpin.component';
import { RegistComponent } from './regist/regist.component';
import { LockComponent } from './lock/lock.component';
const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'pen',
    component: PenComponent
  },
  {
    path: 'guitar',
    component: GuitarComponent
  },
  {
    path: 'hairpin',
    component: HairpinComponent
  },
  {
    path: 'lock',
    component: LockComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
