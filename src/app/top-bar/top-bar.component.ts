import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Router} from "@angular/router";
import {SidePanelService} from "../services";

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  constructor(private oidcSecurityService: OidcSecurityService,
              private router: Router,
              private sidePanelService: SidePanelService) {
  }

  toggleSidePanel(){
      console.log("toggle in TOP-bar")
      this.sidePanelService.toggle();
  }

  onHome(){
    this.router.navigate(["/"])
  }

  onLogOut(){
    console.log("LOGOUT")
    this.oidcSecurityService.logoff();
  }

  ngOnInit(): void {
  }
}

