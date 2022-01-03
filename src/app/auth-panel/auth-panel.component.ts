import { Component, OnInit } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.css']
})
export class AuthPanelComponent implements OnInit {

  constructor(private oidcSecurityService: OidcSecurityService,
              private router: Router ) {

  }

  onAuth(){
    this.oidcSecurityService.authorize();
  }

  ngOnInit(): void {

    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken}) => {
      console.log(accessToken);
      console.log(isAuthenticated);
      if(isAuthenticated){
         this.router.navigate(['/chat']);
      }
    });
  }

}
