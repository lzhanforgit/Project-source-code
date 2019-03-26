import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {MePage} from '../pages/me/me';
import { ModifyInfoPage } from '../pages/modify-info/modify-info';//修改
import {SettingPage} from '../pages/setting/setting';
import { MyFocusPage } from '../pages/my-focus/my-focus';//我关注的人
import { MyFansPage } from '../pages/my-fans/my-fans';//关注我的人
import { MessageBoardPage } from '../pages/message-board/message-board';
import {LoginOrRegisterPage} from '../pages/login-or-register/login-or-register';
import {RegisterPage} from '../pages/register/register';
import {LoginPage} from '../pages/login/login';
import {SearchPage} from '../pages/search/search';
import {SearchResultPage} from '../pages/search-result/search-result';
import { PersonalPage } from '../pages/personal/personal';
import { ModifyPasswordPage } from '../pages/modify-password/modify-password';
import { CreateRecipePage } from '../pages/create-recipe/create-recipe';
import { CreateRecipeDetailPage } from '../pages/create-recipe-detail/create-recipe-detail';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { AddToMenuPage } from '../pages/add-to-menu/add-to-menu';
import { CreateMenuPage } from '../pages/create-menu/create-menu';
import { MenuDatailPage } from '../pages/menu-datail/menu-datail';





import {PostDetailPage} from '../pages/post-detail/post-detail';


// 菜单，菜谱，分类，收藏
import { MenuTypePage } from '../pages/menu-type/menu-type';//菜谱分类
import { ChartsPage } from '../pages/charts/charts';//排行榜
import { HotMenuPage } from '../pages/hot-menu/hot-menu';//热门菜谱
import { HotMenusPage } from '../pages/hot-menus/hot-menus';//热门菜单
import { NewMenuPage } from '../pages/new-menu/new-menu';//最新菜谱
import { NewMenusPage } from '../pages/new-menus/new-menus';//最新菜单
// 上传作品
import { UploadWorkPage } from '../pages/upload-work/upload-work';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
//pipe
import { SearchRecipePipe } from '../pipes/search-recipe.pipe';
import { OrderbyCollectPipePipe } from '../pipes/orderby-collect-pipe.pipe';
import { OrderbyTimePipePipe } from '../pipes/orderby-time-pipe.pipe';
import { SearchUserPipePipe } from '../pipes/search-user-pipe.pipe';
import { OrderbycollectPipe } from '../pipes/orderbycollect.pipe';//收藏排序
import { OrderbytimePipe } from '../pipes/orderbytime.pipe';//时间排序
//service
import {HttpClientModule} from '@angular/common/http';
import {PositionsService} from '../providers/positions.service';
import {UsersService} from '../providers/users.service';
import {GlobalPropertyService} from '../providers/global-property.service';
import {MenuServiceService} from '../providers/menu-service.service';
import {InfoServiceService} from '../providers/info-service.service';
import { RecipeService } from '../providers/recipe.service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PostDetailPage,
    PersonalPage,
    SettingPage,
    ModifyInfoPage,//修改信息
    MyFocusPage,
    MyFansPage,
    MessageBoardPage,
    LoginOrRegisterPage,
    RegisterPage,
    SearchResultPage,
    SearchPage,
    SearchRecipePipe,
    OrderbyCollectPipePipe,
    OrderbyTimePipePipe,
    SearchUserPipePipe,
    ModifyPasswordPage,
    MenuTypePage,
    ChartsPage,
    HotMenuPage,
    HotMenusPage,
    NewMenuPage,
    NewMenusPage,
    OrderbycollectPipe,
    OrderbytimePipe,
    CreateRecipePage,
    CreateRecipeDetailPage,
    RecipeDetailPage,
    AddToMenuPage,
    CreateMenuPage,
    MenuDatailPage,
    UploadWorkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PostDetailPage,
    PersonalPage,
    SettingPage,
    ModifyInfoPage,//修改信息
    MyFocusPage,
    MyFansPage,
    MessageBoardPage,
    LoginOrRegisterPage,
    RegisterPage,
    SearchResultPage,
    SearchPage,
    ModifyPasswordPage,
    MenuTypePage,
    ChartsPage,
    HotMenuPage,
    HotMenusPage,
    NewMenuPage,
    NewMenusPage,
    CreateRecipePage,
    CreateRecipeDetailPage,
    RecipeDetailPage,
    AddToMenuPage,
    CreateMenuPage,
    MenuDatailPage,
    UploadWorkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PositionsService,
    UsersService,
    GlobalPropertyService,
    MenuServiceService,
    InfoServiceService,
    RecipeService,
  ]
})
export class AppModule {}
