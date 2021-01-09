import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
  ]
})
export class DefaultModule { }
