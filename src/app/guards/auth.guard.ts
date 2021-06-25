import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token: any = localStorage.getItem('user') ? localStorage.getItem('user') : "";
      if (token != "") {
        return true;
      } else {
        console.log('Por favor inicia sesion')
        this.router.navigateByUrl('/login');
        return true;
      }
  }

}
