import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Directive, HostListener } from '@angular/core';

// Import for AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth'
// Import for Firebase
import * as firebase from 'firebase/app'
import { GoogleSigninDirective } from 'src/app/user/google-sign-in.directive';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches), shareReplay()
  )

  constructor(private BreakpointObserver: BreakpointObserver, private afAuth: AngularFireAuth) { }

  logout(){
    
    this.afAuth.signOut()
    console.log("Success")
  }
  ngOnInit(): void {
  }

}

