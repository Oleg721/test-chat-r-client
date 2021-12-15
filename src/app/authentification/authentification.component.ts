import {Component, Input, OnInit, OnChanges, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ValidationService} from "../services/validation.service";

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private validationService : ValidationService) { }


  ngOnInit(): void {
  }

}
