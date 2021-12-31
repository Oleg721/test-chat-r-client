import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {AuthPanelComponent} from "./auth-panel/auth-panel.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: AuthPanelComponent,pathMatch: 'full'  },
  { path: 'chat', component: ChatComponent ,pathMatch: 'full'  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
