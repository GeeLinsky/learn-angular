import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WhatIsAngularComponent } from './components/what-is-angular/what-is-angular.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-is-angular', component: WhatIsAngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
