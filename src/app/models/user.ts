import {Colors} from "./colors";


export interface User {
  id: string;
  userName: string;
  role?: string;
  color: Colors;
}
