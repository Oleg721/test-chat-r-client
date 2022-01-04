import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() userList: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
