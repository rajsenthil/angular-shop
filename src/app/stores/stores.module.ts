import {NgModule} from '@angular/core';
import {MaterialModule} from 'src/app/material.module';
import {StoresRoutingModule} from 'src/app/stores/stores-routing.module';
import {FrontPageComponent} from 'src/app/stores/front-page/front-page.component';
import {RouterModule} from '@angular/router';
import {ShoppingCartComponent} from 'src/app/user/shopping-cart/shopping-cart.component';
import {CommonModule} from '@angular/common';
import {authInterceptorProviders} from 'src/app/auth/auth.interceptor';

@NgModule({
  declarations: [
    FrontPageComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    StoresRoutingModule,
  ],
  exports: [
    FrontPageComponent,
  ],
  providers: [
    authInterceptorProviders
  ],
})
export class StoresModule { }
