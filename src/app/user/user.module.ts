import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninDirective } from './google-sign-in.directive';



@NgModule({
  declarations: [GoogleSigninDirective],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleSigninDirective
  ]
})
export class UserModule { }
