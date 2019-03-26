import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './header/nav/nav.component';
import { TaskComponent } from './task/task.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { IndexNewComponent } from './index/index-new/index-new.component';
import { IndexRecommendComponent } from './index/index-recommend/index-recommend.component';
import { BottomComponent } from './bottom/bottom.component';
import { TaskRecommendComponent } from './task/task-recommend/task-recommend.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MyTaskComponent } from './personal-center/my-task/my-task.component';
import { MyLikeComponent } from './personal-center/my-like/my-like.component';
import { MyCollectionComponent } from './personal-center/my-collection/my-collection.component';
import { MyReleaseComponent } from './personal-center/my-release/my-release.component';
import { ReleaseComponent } from './personal-center/my-task/release/release.component';
import { SuccessComponent } from './personal-center/my-task/success/success.component';
import { FailureComponent } from './personal-center/my-task/failure/failure.component';
import { ReceiveComponent } from './personal-center/my-task/receive/receive.component';
import { TaskSearchComponent } from './task/task-search/task-search.component';
import { IndexArtistComponent } from './index/index-artist/index-artist.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { ReleaseTaskComponent } from './release-task/release-task.component';
import { AddTaskComponent } from './release-task/add-task/add-task.component';
import { AddSuccessComponent } from './release-task/add-success/add-success.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DetailsComponent } from "./details/details.component";

import { AuthGuard } from "./service/auth_guard.service";
import { GlobalPropertyService } from './service/global-property.service';


/*谢重阳*/
import { CollctionComponent } from './details/collction/collction.component';
import { FindUserComponent } from './details/find-user/find-user.component';
import { FanComponent } from './details/fan/fan.component';
import { CommmentComponent } from './details/commment/commment.component';
import { PwdComponent } from './details/pwd/pwd.component';
import { WelcomeComponent } from './details/welcome/welcome.component';
import { UpuserComponent } from './details/upuser/upuser.component';
import { MyNavComponent } from './details/my-nav/my-nav.component';
import { DetailsPhotoComponent } from './details/details-photo/details-photo.component';
import { PublishWorksComponent } from './publish/publish-works/publish-works.component';
import { RecentlyReleasedComponent } from './recently/recently-released/recently-released.component';
import { TaskSubmitComponent } from './task/task-submit/task-submit.component';
import { FollowComponent } from './details/follow/follow.component';
import { WorkComponent } from './details/work/work.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerSearchComponent } from './drawer-search/drawer-search.component';
import { RankingPhotoComponent } from './ranking/ranking-photo/ranking-photo.component';
import { RankingDetailsWeekComponent } from './ranking/ranking-details-week/ranking-details-week.component';
import { RankingDetailsNewcomerComponent } from './ranking/ranking-details-newcomer/ranking-details-newcomer.component';
import { RankingDetailsMonthComponent } from './ranking/ranking-details-month/ranking-details-month.component';
import { AddressComponent } from './details/address/address.component';

//搜索
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    TaskComponent,
    CarouselComponent,
    IndexNewComponent,
    IndexRecommendComponent,
    BottomComponent,
    TaskRecommendComponent,
    TaskNewComponent,
    PersonalCenterComponent,
    MyTaskComponent,
    MyLikeComponent,
    MyCollectionComponent,
    MyReleaseComponent,
    ReleaseComponent,
    SuccessComponent,
    FailureComponent,
    ReceiveComponent,
    TaskSearchComponent,
    IndexArtistComponent,
    TaskDetailsComponent,
    ReleaseTaskComponent,
    AddTaskComponent,
    AddSuccessComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,


    CollctionComponent,
    FindUserComponent,
    FanComponent,
    CommmentComponent,
    PwdComponent,
    WelcomeComponent,
    UpuserComponent,
    MyNavComponent,
    DetailsPhotoComponent,
    PublishWorksComponent,
    RecentlyReleasedComponent,
    TaskSubmitComponent,
    FollowComponent,
    WorkComponent,
    DrawerComponent,
    DrawerSearchComponent,
    RankingPhotoComponent,
    RankingDetailsWeekComponent,
    RankingDetailsNewcomerComponent,
    RankingDetailsMonthComponent,
    AddressComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GlobalPropertyService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
