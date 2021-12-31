import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Router} from "@angular/router";

/**
 * @title Basic toolbar
 */
@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  constructor(private oidcSecurityService: OidcSecurityService,
              private router: Router) {
  }
  onHome(){
    this.router.navigate(["/"])
  }
  ngOnInit(): void {

  }
}




// export class TopBarComponent implements OnInit {
//
//   isAuthenticated: boolean = false;
//
//   constructor( private oidcSecurityService: OidcSecurityService,
//                private router: Router) {
//   }
//
//
//   onAuth(){
//     console.log("click!!!!!!")
//     this.oidcSecurityService.authorize();
//   }
//
//   onLogOut(){
//     console.log("LogOut!!!!")
//     this.oidcSecurityService.logoff();
//   }
//
//   ngOnInit(): void {
//
//     this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) =>{
//       console.log("ngOnInit "+ isAuthenticated);
//       this.isAuthenticated = isAuthenticated;
//       if(isAuthenticated){
//         this.router.navigate(['/chat']);
//       }
//     })
//
//
//
//   }
// }
