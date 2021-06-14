import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { WhatIsAngularComponent } from './components/what-is-angular/what-is-angular.component';
import { ComponentComponent } from './components/component/component.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { LocalVariableComponent } from './components/local-variable/local-variable.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { TemplateComponent } from './components/template/template.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

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
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
