import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import {GlobalPropertyService} from './global-property.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private glo: GlobalPropertyService,
    private router: Router
  ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

     if (this.glo.isLogin) {
       return true;
     } else {
        this.router.navigate(['/login',state.url]);
        return false;
     }
  }

}
