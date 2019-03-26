/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule } from '@angular/core';
/*路由*/
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { TaskComponent } from './task/task.component';
import {ReleaseTaskComponent} from './release-task/release-task.component';
import { LoginComponent } from "./user/login/login.component";
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import {RegisterComponent} from "./user/register/register.component";
import { TaskDetailsComponent } from "./task/task-details/task-details.component";
import { TaskSubmitComponent } from "./task/task-submit/task-submit.component";
import { AddSuccessComponent } from "./release-task/add-success/add-success.component";
import { SearchComponent } from "./search/search.component";


import {DetailsComponent} from "./details/details.component";

/*张景爱*/
import {DetailsPhotoComponent} from "./details/details-photo/details-photo.component";
import {PublishWorksComponent} from "./publish/publish-works/publish-works.component";
import {RecentlyReleasedComponent} from "./recently/recently-released/recently-released.component";
import {RankingPhotoComponent} from "./ranking/ranking-photo/ranking-photo.component";
import {RankingDetailsWeekComponent} from "./ranking/ranking-details-week/ranking-details-week.component";
import {RankingDetailsNewcomerComponent} from "./ranking/ranking-details-newcomer/ranking-details-newcomer.component";
import {RankingDetailsMonthComponent} from "./ranking/ranking-details-month/ranking-details-month.component";

/*谢重阳*/
import { CollctionComponent } from './details/collction/collction.component';
import { FindUserComponent } from './details/find-user/find-user.component';
import { FanComponent } from './details/fan/fan.component';
import { CommmentComponent } from './details/commment/commment.component';
import { PwdComponent } from './details/pwd/pwd.component';
import { WelcomeComponent } from './details/welcome/welcome.component';
import { UpuserComponent } from './details/upuser/upuser.component';




import { AuthGuard } from "./service/auth_guard.service";


/*杨尚君*/
import { DrawerComponent } from "./drawer/drawer.component";
import {DrawerSearchComponent} from "./drawer-search/drawer-search.component";


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'realeaseTask',
    component: ReleaseTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/: target',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'collction',
    component: CollctionComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'detail/:userId',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recently',
    component: RecentlyReleasedComponent
  },
  {
    path: 'detailsPhoto/:photoId',
    component: DetailsPhotoComponent
  },
  {
    path: 'publish',
    component: PublishWorksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'success',
    component: AddSuccessComponent
  },
  {
    path: 'taskDetails/:taskPostUserId/:taskOrderNumber',
    component: TaskDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'taskSubmit/:taskOrderNumber/:taskTitle',
    component: TaskSubmitComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'drawer',
    component: DrawerComponent
  },
  {
    path: 'drawerSearch',
    component: DrawerSearchComponent
  },
  {
    path: 'ranking',
    component: RankingPhotoComponent
  },
  {
    path: 'rankingDetailsWeek',
    component: RankingDetailsWeekComponent
  },
  {
    path: 'rankingDetailsNewcomer',
    component: RankingDetailsNewcomerComponent
  },
  {
    path: 'rankingDetailsMonth',
    component: RankingDetailsMonthComponent
  },
  {
    path: 'search/:searchInput',
    component: SearchComponent
  },



  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   redirectTo: 'index',
  //   pathMatch: 'full'
  //
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
