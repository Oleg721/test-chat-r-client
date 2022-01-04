import { Injectable } from '@angular/core';
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: Message<string>[] = [];

  constructor() {
    this.messages = [{userId: "c424b8a6-1a63-4891-a62b-e3b2d2c6dcb0",
      text: "The ShibaA small, agile dog that copes very well wit",
      userName: "alice",
      date: new Date()},
      {userId: "fsdf",
        text: "The Shiba Inu is the smallest of A small, agile dog that copes very well wit",
        userName: "bob",
        date: new Date()},
      {userId: "fsdgdfgf",
        text: "The Shiba Inu is the smallest of A small, agile dmallest of A small, agile dog that copes very well wit",
        userName: "dilan",
        date: new Date()},
      {userId: "c424b8a6-1a63-4891-a62b-e3b2d2c6dcb0",
        text: "The ShibaA small, agile dog that copes very well wit",
        userName: "alice",
        date: new Date()},
      {userId: "fsdf",
        text: "The Shiba Inu is the smallest of A small, agile dog that copes very well wit",
        userName: "bob",
        date: new Date()},
      {userId: "fsdgdfgf",
        text: "The Shiba Inu is the smallest of A small, agile dmallest of A small, agile dog that copes very well wit",
        userName: "dilan",
        date: new Date()},
      {userId: "fsdf",
        text: "The Shiba Inu is the smallest of A small, agile dog that copes very well wit",
        userName: "bob",
        date: new Date()},
      {userId: "fsdgdfgf",
        text: "The Shiba Inu is the smallest of A small, agile dmallest of A small, agile dog that copes very well wit",
        userName: "dilan",
        date: new Date()},
    ]
  }

  getMessages(): Message<string>[]{
    return this.messages;
  }

}
