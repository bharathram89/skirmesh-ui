import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TokenStorageService } from 'src/service/token-storage.service';
import { of } from 'rxjs';
import { UserServiceService } from 'src/service/user-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/service/auth.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(
    private tokenStorage: TokenStorageService ,
    private userSvc:UserServiceService,
    private authSvc: AuthService,
    private router: Router
  ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //if session storage has valid key return true else false
      let token = this.tokenStorage.getToken();
      if(token){
        return this.authSvc.getUser(token).pipe(
          map(userdata=>{
          console.log(userdata,"userdata")
          if(userdata){
            this.userSvc.setSignIn(true);
            this.userSvc.setUserData(userdata);
            return true;
          }
        },
        err=>{
          console.log(err,"error in AUTH GUARD")
          return false;
        })) 
      }else{
        return false;
      }
  }

 
  
}
