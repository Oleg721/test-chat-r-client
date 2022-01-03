import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models";
import {Direction} from "@angular/cdk/bidi";
import {MenuPositionX} from "@angular/material/menu";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User | undefined
  xPosition: MenuPositionX ='after';

  constructor() { }

  ngOnInit(): void {
  }

}
