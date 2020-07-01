import { Directive, HostListener } from '@angular/core';

// Import for AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth'
// Import for Firebase
import * as firebase from 'firebase/app'
@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onClick(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }


}
