import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SignalRService, SidePanelService} from "../services";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {HubConnectionState} from "@microsoft/signalr";
import {User} from "../models";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('drawer') drawer?: any;
  isOpenSidepanel: boolean;
  user: User | undefined

  constructor(private signalRService: SignalRService,
              private oidcSecurityService: OidcSecurityService,
              private sidePanelService: SidePanelService) {
    this.isOpenSidepanel = sidePanelService.isOpen;
  };


  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({userData}) => {
     console.log(userData);
     this.user = {username: userData.name, role: ""}
    })

    this.sidePanelService.checkChanges().subscribe((data: any)=>{
      this.drawer.toggle()
    });

    console.log(this.drawer);
    console.log(this.sidePanelService.isOpen);
    console.log(this.oidcSecurityService.getUserData());
    console.log(this.signalRService.connection.state);
    console.log(this.oidcSecurityService.getAccessToken());
    console.log(this.oidcSecurityService.getRefreshToken());

    if(this.signalRService.connection.state == HubConnectionState.Disconnected){
      this.signalRService.connect();
    }
  }

}
