import { SearchHeroComponent } from './heroes/search-hero/search-hero.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './error/global-error-handler.service.';
import { MessagesComponent } from './messages/messages.component';






@NgModule({
  declarations: [
    AppComponent,


    NavigationComponent,

    DashboardComponent,

    ErrorComponent,

    MessagesComponent,

    SearchHeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
