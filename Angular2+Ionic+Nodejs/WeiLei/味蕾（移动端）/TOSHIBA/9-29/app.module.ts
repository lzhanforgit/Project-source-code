import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { RlTagInputModule } from "angular2-tag-input/dist";

import{RetrieveComponent} from　'./retrieve/retrieve.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MenuClassifyComponent } from './menu-classify/menu-classify.component';
import { MenuGatherComponent } from './menu-gather/menu-gather.component';
// import { MenuDetailsComponent } from './menu-details/menu-details.component';
// import { HotListComponent } from './hot-list/hot-list.component';
import { DynamicComponent } from './dynamic/dynamic.component';
/*import { SearchComponent } from './search/search.component';*/
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountSetComponent } from './account-set/account-set.component';
import { CarouseComponent } from './index/carouse/carouse.component';
import { TabsComponent } from './index/tabs/tabs.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import {AppRoutingModule} from './app-routing.module';
// 导入服务
import {GlobalPropertyService} from './services/global-property.service';
import { LocalStorage }from './services/local-storage.service';
/*导入路由模块*/

import { TimerButtonDirective } from './directives/timer-button.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

import {PersonalCenterModule} from './personal-center/personal-center.module';
import {SearchModule} from './search/search.module';
import {HotListModule} from './hot-list/hot-list.module';
import {MenuDetailsModule } from './menu-details/menu-details.module';
// 导入子路由模块
// 分页插件
import {Ng2PaginationModule} from 'ng2-pagination';
import { UploadingComponent } from './uploading/uploading.component';
@NgModule({
  declarations: [
    AppComponent,
    RetrieveComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    // PersonalCenterComponent,
    MenuClassifyComponent,
    MenuGatherComponent,
    // MenuDetailsComponent,
    // HotListComponent,
    DynamicComponent,
   /* SearchComponent,*/
    PageNotFoundComponent,
    TimerButtonDirective,
    EqualValidatorDirective,
    CarouseComponent,
    TabsComponent,
    AccountSetComponent,
    CreateMenuComponent,
    UploadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HotListModule,
    SearchModule,
    PersonalCenterModule,
    MenuDetailsModule,
    // CreateMenuModule,
    AppRoutingModule,
    RlTagInputModule,
    Ng2PaginationModule,
  ],
  providers: [GlobalPropertyService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {

}

