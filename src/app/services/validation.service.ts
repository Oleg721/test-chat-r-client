import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public getUserFormValidation(): FormGroup{
    return new FormGroup({
      "userName": new FormControl("", Validators.required),
      "userPassword": new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      "userRole": new FormControl("user", Validators.required),
    });
  }

}
