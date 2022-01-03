import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() userList: User[] ;
    // [
    //   {username: "Bob", role: ""},
    //   {username: "Pit", role: ""} ,
    //   {username: "Jonson", role: ""},

    // ];

  constructor() {
      let str = "James Nelson,Vincent Graves,Robert Foster,Philip Gonzalez,Richard Nguyen,Robert Green,Martin Wise,Seth Barnes,Gregory Matthews,Dennis Cruz,Donald Ward,Jack Barnett,James Gross,Bryan Reynolds,Jesse Walker,Aaron Lee,Randall Bowman,James Kelly,James Willis,Dennis Mack,Juan Williams,Max Harper,Manuel James,David Boone,Anthony Thomas,Brian Rodriguez,Jason Jones,John Reese,Gregory Harper,Ernest Holmes".split(",");
      this.userList =  str.map<User>(value =>{return {username: value, role: ""}})

  }

  ngOnInit(): void {
  }

}
