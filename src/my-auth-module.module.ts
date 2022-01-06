import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "angular-auth-oidc-client";



@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:5001',
        redirectUrl: window.location.origin +"/sign-up",
        postLogoutRedirectUri: window.location.origin,
        clientId: 'mvc2',
        scope: 'openid offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        //renewTimeBeforeTokenExpiresInSeconds: 4,
        //logLevel: LogLevel.Debug,
      }
    })
  ]
})


export class MyAuthModuleModule { }


