import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ServicesComponent } from './services/services.component';
import { SheetsComponent } from './sheets/sheets.component';

console.warn("user module load");

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ServicesComponent,
    SheetsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
