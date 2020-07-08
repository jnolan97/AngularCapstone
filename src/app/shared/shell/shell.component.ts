import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


// Import for AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth'
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

  constructor(private BreakpointObserver: BreakpointObserver, private afAuth: AngularFireAuth,
    private router: Router) { }

  logout(){
    
    this.afAuth.signOut()
    this.router.navigateByUrl('/')
    console.log("Success")
  }
  ngOnInit(): void {
  }

}

