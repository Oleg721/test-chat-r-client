import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { ChatComponent } from './chat/chat.component';
import {MaterialExampleModule} from '../material.module';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyAuthModuleModule} from "../my-auth-module.module";
import {SidePanelComponent} from "./chat/side-panel/side-panel.component";
import { UserItemComponent } from './chat/side-panel/user-item/user-item.component';
import { SendMessagePanelComponent } from './chat/send-message-panel/send-message-panel.component';
import { MessageViewPanelComponent } from './chat/message-view-panel/message-view-panel.component';
import { MessageItemComponent } from './chat/message-view-panel/message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChatComponent,
    AuthPanelComponent,
    SidePanelComponent,
    UserItemComponent,
    SendMessagePanelComponent,
    MessageViewPanelComponent,
    MessageItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    MyAuthModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
