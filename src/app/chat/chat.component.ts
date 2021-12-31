import { Component, OnInit } from '@angular/core';
import {SignalRService} from "../services";
import {OidcSecurityService} from "angular-auth-oidc-client";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  showFiller = false;

  constructor(private signalRService: SignalRService,
              private oidcSecurityService: OidcSecurityService) { }

  ngOnInit(): void {
    console.log(this.oidcSecurityService.getUserData());
    console.log(this.oidcSecurityService);
    console.log(this.oidcSecurityService.getAccessToken());
    this.signalRService.connect();

  }

}
