import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {TestService, ValidationService} from "../../services";
import {UserLogin} from "../../models/userLogin.model";
import {UserRegistration} from "../../models/userRegistration.model";


@Component({
  selector: 'app-autentification-form',
  templateUrl: './autentification-form.component.html',
  styleUrls: ['./autentification-form.component.css']
})
export class AutentificationFormComponent implements OnInit {

  userForm : FormGroup;
  isButtonDisabled: boolean = true;
  url : string | undefined;


  constructor(private router: Router,
              private validationService : ValidationService, private testService : TestService) {
    this.userForm = validationService.getUserFormValidation();
  }



  onLoginHandler(): void {
    this.testService.testLogin(this.userForm.value)
  }
  onRegistrationHandler(): void {
  }


  ngOnInit(): void {
    this.url = this.router.url;
    this.userForm.statusChanges.subscribe(status => {
       this.isButtonDisabled = status == "INVALID"
    })
  }
}
