import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from 'src/app/material.module';
import {ProfileComponent} from 'src/app/user/profile/profile.component';
import {OrderHistoryComponent} from 'src/app/user/order-history/order-history.component';
import {DefaultComponent} from 'src/app/shared/layouts/default/default.component';
import {LoginComponent} from 'src/app/user/login/login.component';
import {RegisterComponent} from 'src/app/user/register/register.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'history',
        component: OrderHistoryComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      }
      ]
  },
];

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
