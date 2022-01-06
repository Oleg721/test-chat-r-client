import {Injectable} from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {environment} from "../../environments/environment";
import constants from '../constants';
import {HubConnection} from "@microsoft/signalr";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {User, UserSubjectData} from "../models";

@Injectable({
  providedIn: 'root'
})

export class SignalRService {

  connection: HubConnection;
  private _isConnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _userSubject: Subject<UserSubjectData> = new Subject<UserSubjectData>();

  constructor(private oidcSecurityService: OidcSecurityService) {
    console.log(oidcSecurityService.getAccessToken());

    const options = {accessTokenFactory: () => oidcSecurityService.getAccessToken()};
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.chatApiUrl + '/chat', options)
      .build();
    this.connection.onclose(error => {
      this._isConnect.next(false);
      this._users.next([]);
    })

    this.connection.on("GetUsers", data => {
      console.log(data);
      this._users.next(data);
    });

    this.connection.on("User", (method ,data) => {
      console.log(method);
      console.log(data);
      this._userSubject.next({method, data});
    });


/////////////////////////
    this.connection.on("Error", e => console.log("Error => ", e.msg));
    this.connection.on("GetUsers", e => console.log("getUsers => ", e));
    this.connection.on("AddUser", e => console.log("AddUsers => ", e));
    ///////////////////
  }


  checkConnect() {
    return this._isConnect;
  }

  checkUsers() {
    return this._users;
  }

  checkUser() {
    return this._userSubject;
  }

  connect() {
    const isConnectSubj = this._isConnect;
    this.connection.start().then(function () {
      isConnectSubj.next(true);
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  async testSenf() {
    await this.connection.send(constants.SR_METHOD_TEST, {someDate: "HEllo!"})
  }

}
