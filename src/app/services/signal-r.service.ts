import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {environment} from "../../environments/environment";
import constants from '../constants';
import {HubConnection} from "@microsoft/signalr";
import {OidcSecurityService} from "angular-auth-oidc-client";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  connection: HubConnection;

  constructor(private oidcSecurityService: OidcSecurityService) {
    console.log( oidcSecurityService.getAccessToken());
    const options = {  accessTokenFactory: ()=> oidcSecurityService.getAccessToken() };
    console.log(options);
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.chatApiUrl + '/chat', options)
      .build();
  }

   connect(){
    this.connection.start().then(function () {
        console.log('SignalR Connected!');})
      .catch(function (err) {
        return console.error(err.toString());
      });
  }

  async testSenf(){
    await this.connection.send(constants.SR_METHOD_TEST, {someDate: "HEllo!"})
  }

}
