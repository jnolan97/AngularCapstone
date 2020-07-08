import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Directive, HostListener } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{
  private user: Observable<firebase.User>
  private userDetails: firebase.User = null;
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
}

  async getUser(){
    console.log(this.afAuth.authState.pipe(first()).toPromise())
    return this.afAuth.authState.pipe(first()).toPromise();
  }


    async canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Promise<boolean> {
      const user = await this.afAuth.currentUser;
      const isLoggedIn = !!user;
      if (!isLoggedIn) {
        this.router.navigateByUrl('/')
      }
      return isLoggedIn;
    }
  }
  
  // logout() {
  //   this.afAuth.authState.signOut()
  //   .then((res) => this.router.navigateByUrl('/'))
  // }


