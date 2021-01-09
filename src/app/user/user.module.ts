import {NgModule} from '@angular/core';
import {MaterialModule} from 'src/app/material.module';
import {RouterModule} from '@angular/router';
import {UserRoutingModule} from 'src/app/user/user-routing.module';
import {ProfileComponent} from 'src/app/user/profile/profile.component';
import {OrderHistoryComponent} from 'src/app/user/order-history/order-history.component';
import {CommonModule} from '@angular/common';
import {LoginComponent} from 'src/app/user/login/login.component';
import {RegisterComponent} from 'src/app/user/register/register.component';
import {authInterceptorProviders} from 'src/app/auth/auth.interceptor';

@NgModule({
  declarations: [
    ProfileComponent,
    OrderHistoryComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    UserRoutingModule,
  ],
  exports: [
    ProfileComponent,
    OrderHistoryComponent
  ],
  providers: [
    authInterceptorProviders
  ],
})
export class UserModule { }
