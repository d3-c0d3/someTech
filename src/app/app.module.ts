import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './core/utils/custom-overlay-container';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthUserInterceptor } from './auth-interceptor/auth-user.interceptor';
import { SharedModule } from './shared/shared.module';

import { AdminService } from './services/admin.service';
import { AuthAdminInterceptor } from './auth-interceptor/auth-admin.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AdminService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthAdminInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
