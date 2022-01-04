import { Injectable } from '@angular/core';
import {User} from "../models";
import {reduce} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatUserService {

  userList: Map<string,User>;

  constructor() {
    let str = "James,Vincent,Robert,Philip,Richard,Robert,Martin,Seth,Gregory,Dennis,Donald,Jack,James,Bryan,Jesse,Aaron,Randall,James,James,Dennis,Juan,Max,Manuel,David,Anthony,Brian,Jason,John,Gregory,Ernest".split(",");
    this.userList =  str.reduce((acc, value) => {
      return acc.set(value,{username: value, role: "", id: ""});
    }, new Map<string,User>())
    //this.userList =  str.map<User>(value =>{return {username: value, role: "", id: ""}})
  }

  getUsers(): Map<string,User>{
    return this.userList;
  }


}
