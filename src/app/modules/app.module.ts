import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { HomeComponent } from '../components/home/home.component';
import { WhatIsAngularComponent } from '../components/what-is-angular/what-is-angular.component';
import { ComponentComponent } from '../components/component/component.component';
import { InputComponent } from '../components/input/input.component';
import { OutputComponent } from '../components/output/output.component';
import { LocalVariableComponent } from '../components/local-variable/local-variable.component';
import { ViewChildComponent } from '../components/view-child/view-child.component';
import { TemplateComponent } from '../components/template/template.component';
import { TwoWayBindingComponent } from '../components/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from '../components/directive/directive.component';
import { DependencyInjectionComponent } from '../components/dependency-injection/dependency-injection.component';
import { PrettyJsonPipe } from '../pipes/pretty-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    WhatIsAngularComponent,
    ComponentComponent,
    InputComponent,
    OutputComponent,
    LocalVariableComponent,
    ViewChildComponent,
    TemplateComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    DependencyInjectionComponent,
    PrettyJsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
