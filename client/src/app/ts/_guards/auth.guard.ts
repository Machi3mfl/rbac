import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('currentUser')){
      // if logged
      return true
    }

    // if not logged return to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false
  }


}
