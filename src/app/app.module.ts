import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule, LogLevel} from "angular-auth-oidc-client";
import { ChatComponent } from './chat/chat.component';
import {MaterialExampleModule} from '../material.module';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChatComponent,
    AuthPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:5001',
        redirectUrl: window.location.origin +"/sign-up",
        postLogoutRedirectUri:  window.location.origin,
        clientId: 'mvc2',
        scope: 'openid',
        responseType: 'code',
        //silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
