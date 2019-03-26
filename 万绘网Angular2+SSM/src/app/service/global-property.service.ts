import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {

  public serverURL: string;
  public isLogin: boolean;
  constructor() {
    this.serverURL = 'http://127.0.0.1:8080';
    if((localStorage.getItem('tel') == null || localStorage.getItem('tel') == '' ) || document.cookie.split(';')[0].split('=')[1] != localStorage.getItem('tel')){
      this.isLogin = false;
    }else {
      this.isLogin = true;
    }
  }
}
