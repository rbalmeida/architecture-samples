import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiClientComponent } from './api-client/api-client.component';
import { Simple01Component } from './simple01/simple01.component';
import { Simple02Component } from './simple02/simple02.component';
import { SubPathChild01Component } from './sub-path/sub-path-child01/sub-path-child01.component';
import { SubPathChild02Component } from './sub-path/sub-path-child02/sub-path-child02.component';
import { SubPathComponent } from './sub-path/sub-path.component';

const routes: Routes = [
  {path: 'simple01', component: Simple01Component},
  {path: 'simple02', component: Simple02Component},
  {path: 'subpath01', component: SubPathComponent, 
    children: [
      {path: 'child01', component: SubPathChild01Component},
      {path: 'child02', component: SubPathChild02Component}
    ]  
  },
  {path: 'api-client', component: ApiClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
