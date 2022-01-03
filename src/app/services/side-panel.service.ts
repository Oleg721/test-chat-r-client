import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class SidePanelService {

  isOpen: boolean;
  checkObservable : Subject<boolean>;

  constructor() {
    window.screen.width > 600 ? this.isOpen = true : this.isOpen = false
    this.checkObservable = new Subject<boolean>();
      }

  checkChanges(): Observable<boolean>{
    return this.checkObservable;
  }

  toggle(){
    console.log("Toggle! ==> "+ this.isOpen)
    this.checkObservable.next(this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
