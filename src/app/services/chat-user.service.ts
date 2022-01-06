import { Injectable } from '@angular/core';
import {User} from "../models";
import {BehaviorSubject, reduce} from "rxjs";
import {SignalRService} from "./signal-r.service";

@Injectable({
  providedIn: 'root'
})
export class ChatUserService {

  private _userMap: Map<string,User> = new Map<string, User>();
  private _usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  //private _checkUser:


  constructor( private signalRService: SignalRService) {

    this.signalRService.checkUsers().subscribe(value => {
      this._userMap = value.reduce((acc, value) => {
           return acc.set(value.id,value);
         }, new Map<string,User>())
      this._usersSubject.next([...this._userMap.values()])
    })

    this.signalRService.checkUser().subscribe(({method, data}) => {
      if(method === "add"){
        this._userMap.set(data.id, data);
        this._usersSubject.next([...this._userMap.values()])
      }
      if(method === "delete"){
        this._userMap.delete(data.id);
        this._usersSubject.next([...this._userMap.values()])
      }
    })
  }

  checkUsers(){
    return this._usersSubject;
  }



  getUsers(): Map<string,User>{
    return this._userMap;
  }


}
