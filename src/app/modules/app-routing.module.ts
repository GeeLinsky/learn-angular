import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { WhatIsAngularComponent } from '../components/what-is-angular/what-is-angular.component';
import { ComponentComponent } from '../components/component/component.component';
import { TemplateComponent } from '../components/template/template.component';
import { DirectiveComponent } from '../components/directive/directive.component';
import { DependencyInjectionComponent } from '../components/dependency-injection/dependency-injection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-is-angular', component: WhatIsAngularComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
