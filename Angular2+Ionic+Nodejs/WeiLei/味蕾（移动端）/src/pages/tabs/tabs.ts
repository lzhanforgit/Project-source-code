import { Component,ViewChild } from '@angular/core';
import {  NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MePage} from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MePage;
  @ViewChild('rootTabs') tabRef:any;

  constructor(

    private navParma:NavParams
  ) {

  }
  ionViewLoaded() {
    let i = this.navParma.get('i')||0;
    this.tabRef.select(i);
    let id=this.navParma.get('userId')+this.navParma.get('name');
    console.log(id);
  }

  goPerson(){
    console.log('haha')
  }
}
