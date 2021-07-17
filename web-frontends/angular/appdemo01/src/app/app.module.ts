import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Simple01Component } from './simple01/simple01.component';
import { Simple02Component } from './simple02/simple02.component';
import { SubPathComponent } from './sub-path/sub-path.component';
import { SubPathChild01Component } from './sub-path/sub-path-child01/sub-path-child01.component';
import { SubPathChild02Component } from './sub-path/sub-path-child02/sub-path-child02.component';

@NgModule({
  declarations: [
    AppComponent,
    Simple01Component,
    Simple02Component,
    SubPathComponent,
    SubPathChild01Component,
    SubPathChild02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
