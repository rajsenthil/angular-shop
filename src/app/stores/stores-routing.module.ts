import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from 'src/app/material.module';
import {FrontPageComponent} from 'src/app/stores/front-page/front-page.component';
import {DefaultComponent} from 'src/app/shared/layouts/default/default.component';
import {ShoppingCartComponent} from 'src/app/user/shopping-cart/shopping-cart.component';
import {ThankYouComponent} from 'src/app/stores/thank-you/thank-you.component';
import {OrderHistoryComponent} from 'src/app/user/order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: FrontPageComponent,
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'order',
        component: OrderHistoryComponent
      },
      {
        path: 'thank',
        component: ThankYouComponent
      },
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
