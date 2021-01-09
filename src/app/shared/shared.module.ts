import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from 'src/app/material.module';
import {DefaultComponent} from 'src/app/shared/layouts/default/default.component';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
