import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';


import {AppRoutingModule} from './app-routing.module';
import {GlobalPropertyService} from './services/global-property.service';
import { NavComponent } from './nav/nav.component';
import { LunboComponent } from './index/lunbo/lunbo.component';
import { FooterComponent } from './footer/footer.component';
import { SchoolComponent } from './school/school.component';
import { CompanyComponent } from './company/company.component';
import { CommunityComponent } from './community/community.component';
import { PenComponent } from './pen/pen.component';
import { GuitarComponent } from './guitar/guitar.component';
import { HairpinComponent } from './hairpin/hairpin.component';
import { WorkComponent } from './work/work.component';
import { RegistComponent } from './regist/regist.component';
import {LocalStorage} from './services/localStorage.service';
import { LockComponent } from './lock/lock.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavComponent,
    LunboComponent,
    FooterComponent,
    SchoolComponent,
    CompanyComponent,
    CommunityComponent,
    PenComponent,
    GuitarComponent,
    HairpinComponent,
    WorkComponent,
    RegistComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GlobalPropertyService,LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
