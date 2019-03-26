import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../services/localStorage.service';
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [LocalStorage],
})
export class NavComponent implements OnInit {
  constructor(
    private   local: LocalStorage,
  ) { }
  _hiddens: boolean;
  username: any;
  ngOnInit() {

  }
  ngDoCheck () {
    if ( this.local.get('telephone') ) {
      this._hiddens = true;
      this.username = this.local.get('username');
    }
  }
  out() {
    localStorage.clear();
    // this._hiddens = !this._hiddens;
  }
}
