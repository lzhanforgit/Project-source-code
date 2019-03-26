import { Component} from '@angular/core';

import {GlobalPropertyService} from './services/global-property.service';
import {LocalStorage} from './services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalPropertyService],
})
export class AppComponent {
  title = 'app';
  _hiddens: boolean;
  username: any;
  constructor(
    private   glo: GlobalPropertyService,
    private  localstorage: LocalStorage
  ) {}
  ngOnInit() {
    this._hiddens = this.glo._hiddenNav;
    console.log('ngoninis>>>>>>>>>>>>>>>>>>>>>');
  }
  ngAfterContentInit() {
    console.log('contentInit>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    let that = this;
    if (that. localstorage.get ('token')) {
      console.log(that.localstorage.get('token'))
      that._hiddens = true;
      that.username = that. localstorage.get('username');
      // console.log(that._hiddens);
      // console.log(that.username);
    }else {
      that._hiddens = false;
      console.log(that._hiddens);
    }
    if (that.localstorage.get('username') ) {
      that._hiddens = true;
      that.username = that.localstorage.get('username');
    }else {
      that._hiddens = false;
    }

  }
  ngDocheck() {

  }
}
