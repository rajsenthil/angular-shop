import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategyService} from 'src/app/selective-preloading-strategy.service';
import {MaterialModule} from 'src/app/material.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {StoresModule} from 'src/app/stores/stores.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule),
  }
];

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    StoresModule,
    RouterModule.forRoot(
      appRoutes,
      {
    enableTracing: false,
    preloadingStrategy: SelectivePreloadingStrategyService,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
