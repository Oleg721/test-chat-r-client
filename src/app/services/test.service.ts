import { Injectable } from '@angular/core';
import {UserLogin} from "../models/userLogin.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OidcSecurityService} from "angular-auth-oidc-client";


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth()

    this.oidcSecurityService.authorize();


  }



}
