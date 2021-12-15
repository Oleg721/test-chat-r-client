import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {  path: 'login', component: AuthentificationComponent,pathMatch: 'full' },
  { path: 'sign-up', component: AuthentificationComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
