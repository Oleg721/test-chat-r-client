import {UserLogin} from "./userLogin.model";

export interface UserRegistration extends UserLogin {
  role?: string;
}
